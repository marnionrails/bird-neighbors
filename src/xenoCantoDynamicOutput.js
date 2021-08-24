import $ from 'jquery';
import DataParsing from './data-parsing.js';

export default class DynamicSoundDisplay {
  static displayBirdSounds(response, commonName) {
    $('#display-sounds').show();
    $("#common-name").text(commonName);
    const songsToOutput = DataParsing.filterForSongs(response);
    const callsToOutput = DataParsing.filterForCalls(response);
    $("#song").attr("src", songsToOutput[0].file);
    $("#call").attr("src", callsToOutput[0].file);
  }
  
  static SongOutput() {
    let outputDiv = $("#songs-output");
    let htmlForSongOutput = `
    <figure>
      <figcaption>Song</figcaption>
      <audio 
        controls
        id="song">
      </audio>
    </figure>`;
    outputDiv.html(htmlForSongOutput);
  }

  static CallOutput() {
    let outputDiv = $("#calls-output");
    let htmlForCallOutput = `
    <figure>
      <figcaption>Call</figcaption>
      <audio 
        controls
        id="call">
      </audio>
    </figure>`;
    outputDiv.html(htmlForCallOutput);
  }
} 

