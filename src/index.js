import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BirdSoundsService from './bird-sounds-service.js';
import DataParsing from './data-parsing.js';
import  Geocode  from './geocode.js';
import NearbyService from './ebird-service.js';
import Validation from './validation.js';

function listNearbyBirds(response){
  if (response) {
    //console.log(response);
    for(let i=0; i<response.length; i++){
      $("ul.showNearBirds").append(`<li> ${response[i].comName} </li>`);
    }
  }
}

$("#userInput").submit(function() {
  event.preventDefault();
  let species = "Accipiter cooperii"; // mocking getting species name from eBird API response
  let promise = BirdSoundsService.getSounds(species);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('#outputSounds').attr("src", body.recordings[0].url);
    const recordingsToOutput = DataParsing.filterXenoCantoResponse(body);
    console.log(recordingsToOutput);
  }, function(error) {
    $('#showErrors').text(`There was an error processing your request: ${error}`);
  });
});

$(document).ready(function() {
  
  $('#zipcode').click(function() {
    $('.showErrors').show();
    $(".card").show();
    $("ul.showNearBirds").text('');
    
    let zipCode = $('#zipCode').val();
    let lat = "";
    let lng = "";
    let rad = "";
    let sciName = "";
    Validation.validation(zipCode);
    Geocode.getCoordinates(zipCode)
      .then(function(geocodeResponse) {
        const geocodeBody = JSON.parse(geocodeResponse);
        lat = geocodeBody.results[0].geometry.location.lat;
        lng = geocodeBody.results[0].geometry.location.lng;
        rad = 30;
        return NearbyService.nearby(lat, lng, rad);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your zip code; ${error}`);
      })
      .then(function(nearbyServiceResponse) {
        sciName = nearbyServiceResponse[0].sciName;
        console.log(sciName);
        listNearbyBirds(nearbyServiceResponse);
      })
      .catch(function(error) {
        $('.showErrors').text(`There was an error with getting your local birds: ${error}`);
      });
  });
});
