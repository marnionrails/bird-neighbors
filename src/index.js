import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { EbirdService, NearbyService } from './ebird-service.js';

function getElements(response) { 
  if (response) {
    for(let i=0; i<=response.length; i++){
      $('ul.showBirds').append(`<li> The birds in ${response[i].locName} are called ${response[i].comName} </li>`);
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
    EbirdService.getData(location)
      .then(function(response) {
        getElements(response);
      });
  });
  $('#longlat').click(function() {
    let lng = $('#lng').val();
    let lat = $("#lat").val();
    
		NearbyService.nearby(lat, lng)
      .then(function(response) {
        getLongLatElements(response);
      });
  });
});