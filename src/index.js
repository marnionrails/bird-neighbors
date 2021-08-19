import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
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

