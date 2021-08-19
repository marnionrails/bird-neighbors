import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BirdSoundsService from './bird-sounds-service.js';
import DataParsing from './data-parsing.js';

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
