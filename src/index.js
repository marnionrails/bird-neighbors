import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GeocodeService  from './services/geocode-service.js';
import GeocodeErrorHandling from './geocode-error-handling.js';
import NearbyService from './services/ebird-service.js';
import Validation from './validation.js';
import BirdSoundsService from './services/bird-sounds-service.js';
import DataParsing from './data-parsing.js';

function listNearbyBirds(response){
  if (response) {
    for(let i=0; i<response.length; i++){
      $("ul.showNearBirds").append(`<li> ${response[i].comName} </li>`);
    }
  }
}

function displayBirdSounds(response) {
  const songsToOutput = DataParsing.filterForSongs(response);
  const callsToOutput = DataParsing.filterForCalls(response);
  $("#sound").attr("src", songsToOutput[0].file);
  console.log(callsToOutput);
  // $("#callsToOutput").append(callsToOutput);
}

function displayErrors(error) {
  $(".showErrors").text(`${error}`);
}
  
  $('#zipcode').click(function() {
    $('.showErrors').show();
    $(".card").show();
    $("ul.showNearBirds").text('');
    
    let zipCode = $('#zipCode').val();
    let lat = "";
    let lng = "";
    let rad = "";
    let sciName = "";
    let comName = "";
    try {
      Validation.validation(zipCode);
    } catch(error) {
      $(".showErrors").text(error.message);
      throw new Error("Invalid zip code length. Zip codes must be 5-digits");
    }
    GeocodeService.getCoordinates(zipCode)
      .then(function(geocodeResponse) {
        try {
          GeocodeErrorHandling.assessResponseStatus(geocodeResponse);
        } catch (error) {
          $(".showErrors").text(error.message);
          throw new Error("Apologies. Something went wrong behind the scenes when we tried to process your zip code.");
        }
        lat = geocodeResponse.results[0].geometry.location.lat;
        lng = geocodeResponse.results[0].geometry.location.lng;
        rad = 30;
        return NearbyService.getNearbyBirds(lat, lng, rad);
      })
      .catch(function(error) {
        $('.showErrors').text(`There was an error processing your zip code: ${error}`);
      })
      .then(function(nearbyServiceResponse) {
        $(".card").show();
        $(".showErrors").hide();
        listNearbyBirds(nearbyServiceResponse);
        sciName = nearbyServiceResponse[0].sciName;
        comName = nearbyServiceResponse[0].comName;
        $("#common-name").text(comName);
        return BirdSoundsService.getSounds(sciName);
      })
      .catch(function(error) {
        $('.showErrors').text(`There was an error with getting your local birds: ${error}`);
      })
      .then(function(birdSoundsResponse) {
        const birdSoundsBody = JSON.parse(birdSoundsResponse);
        displayBirdSounds(birdSoundsBody);
      }, function(error) {
        $('.showErrors').text(`There was an error with processing your bird sound request: ${error}`);
      });
  });


