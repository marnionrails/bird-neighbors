import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BirdSoundsService from './bird-sounds-service.js';

$("#userInput").submit(function() {
  event.preventDefault();
  console.log("submitted");
  let species = "Accipiter cooperii"; // mocking getting species name from eBird API response
  let promise = BirdSoundsService.getSounds(species);
  console.log(promise);
  promise.then(function(response) {
    console.log(response);
    const body = JSON.parse(response);
    $('#outputSounds').attr("src", body.recordings[0].url);
  }, function(error) {
    console.log(error);
    $('#showErrors').text(`There was an error processing your request: ${error}`);
  });
});
