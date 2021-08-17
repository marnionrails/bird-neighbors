import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { EbirdService, NearbyService } from './ebird-service.js';

function getElements(response) { 
   if (response) {
    for(let i=0; i<=response.length; i++){
      $('ul.showBirds').append(`<li> The birds are called ${response[i].speciesCode} </li>`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

function getLongLatElements(response){
  if(response){
    for(let i=0; i<=response.length; i++){
      $("ul.showNearBirds").append(`<li> The birds nearby include a ${response[i].comName} </li>`);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#birdLocation').click(function() {
    let location = $('#location').val();
    let y = $("#year").val();
    let m = $("#month").val();
    let d = $("#day").val();
    EbirdService.getData(location,y,m,d)
      .then(function(response) {
        getElements(response);
      });
  });
  $('#longlat').click(function() {
    let lng = $('#lng').val();
    let lat = $("#lat").val();
    let rad = $('#rad').val();
    
		NearbyService.nearby(lat, lng, rad)
      .then(function(response) {
        getLongLatElements(response);
      });
  });
});

/* import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Geocode from './geocode';

$('form#geolocation').submit(function() {
  event.preventDefault();
  console.log("submitted");
  const zipCode = $('#zipCode').val("");
  let promise = Geocode.getCoordinates(zipCode);
  console.log(promise);
  promise.then(function(response) {
    console.log(response);
    const body = JSON.parse(response);
    $('#latitude').text(body.results[0].geometry.location.lat);
    $('#longitude').text(body.results[0].geometry.location.lng);
    let latitude = body.results[0].geometry.location.lat;
    let longitude = body.results[0].geometry.location.lng;
    console.log(latitude);
    console.log(longitude);
  }, function(error) {
    console.log(error);
    $('#showErrors').text(`There was an error processing your request: ${error}`);
  });
});
 */