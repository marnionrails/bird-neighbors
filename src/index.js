import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GeocodeService  from './services/geocode-service.js';
import NearbyService from './services/ebird-service.js';
import Validation from './validation.js';
import BirdSoundsService from './services/bird-sounds-service.js';
import DynamicSoundDisplay from './xenoCantoDynamicOutput.js';

function clearFields() {
  $('#zipCode').val("");
  $('.showErrors').text("");
  $(".card").hide();
  $('#display-sounds').hide();
  $('#xcAttribution').remove();
}

function listNearbyBirds(response){
  $(".card").show();
  $("ul.showNearBirds").text('');
  if (response) {
    for(let i=0; i<response.length; i++){
      $("ul.showNearBirds").append(`<li> ${response[i].comName} </li>`);
    }
  }
  $("ul.showNearBirds").append(`<br><p>This list of birds was supplied by the Cornell Lab of Ornithology's eBird database.</p>`);
}

function displayErrors(error) {
  $(".showErrors").show();
  $(".showErrors").text(`${error}`);
}
  
$('#zipcode').click(function() {
  let zipCode = $('#zipCode').val();
  let lat = "";
  let lng = "";
  let rad = "";
  let sciName = "";
  let comName = "";
  clearFields();
  try {
    $(".showErrors").hide();
    Validation.validation(zipCode);
  } 
  catch(error) {
    displayErrors(error);
    throw new Error("Invalid zip code length. Zip codes must be 5-digits");
  }
  GeocodeService.getCoordinates(zipCode)
    .then(function(geocodeResponse) {
      if (geocodeResponse instanceof Error) {
        throw Error(`Geocode API error: ${geocodeResponse.message}`);
      }
      if (geocodeResponse.status !== "OK") {
        throw Error(`Geocode API error: ${geocodeResponse.status}: ${geocodeResponse.error_message}`);
      }
      lat = geocodeResponse.results[0].geometry.location.lat;
      lng = geocodeResponse.results[0].geometry.location.lng;
      rad = 30;
      return NearbyService.getNearbyBirds(lat, lng, rad);
    })
    .then(function(nearbyServiceResponse) {
      if (nearbyServiceResponse instanceof Error) {
        throw Error(`eBird API error: ${nearbyServiceResponse.message}`);
      }
      listNearbyBirds(nearbyServiceResponse);
      sciName = nearbyServiceResponse[0].sciName;
      comName = nearbyServiceResponse[0].comName;
      return BirdSoundsService.getSounds(sciName);
    })
    .then(function(birdSoundsResponse) {
      if (birdSoundsResponse instanceof Error) {
        throw Error(`xeno-canto API error: ${birdSoundsResponse.message}`);
      }
      DynamicSoundDisplay.SongOutput();
      DynamicSoundDisplay.CallOutput();
      DynamicSoundDisplay.displayBirdSounds(birdSoundsResponse, comName);
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
});