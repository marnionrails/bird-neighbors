import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BirdSoundsService from './bird-sounds-service.js';
import DataParsing from './data-parsing.js';
import  Geocode  from './geocode.js';
import NearbyService from './ebird-service.js';

function getLongLatElements(response){
  if(response){
    for(let i=0; i<=response.length; i++){
      $("ul.showNearBirds").append(`<li> ${response[i].comName} </li>`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
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
    $(".card").show();
    let zipCode = $('#zipCode').val();
    let promise = Geocode.getCoordinates(zipCode);
    $("ul.showNearBirds").text('');
    promise.then(function(response) {
      const body = JSON.parse(response);
      let lat = body.results[0].geometry.location.lat;
      let lng = body.results[0].geometry.location.lng;
      let rad = 30;
      return NearbyService.nearby(lat, lng, rad)
        .then(function(response) {
          getLongLatElements(response);
        });
    });
  });
});
