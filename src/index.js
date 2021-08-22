import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
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

$(document).ready(function() {
  
  $('#zipcode').click(function() {
    $('.showErrors').show();
    $(".card").show();
    $("ul.showNearBirds").text('');
    
    let zipCode = $('#zipCode').val();
    let lat = "";
    let lng = "";
    let rad = "";
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
        console.log(nearbyServiceResponse);
        listNearbyBirds(nearbyServiceResponse);
      })
      .catch(function(error) {
        $('.showErrors').text(`There was an error with getting your local birds: ${error}`);
      });
  });
});

