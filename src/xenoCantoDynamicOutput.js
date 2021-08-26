import $ from 'jquery';
import DataParsing from './data-parsing.js';

export default class DynamicSoundDisplay {
  static displayBirdSounds(response, commonName) {
    $('#display-sounds').show();
    $("#common-name").text(commonName);
    const songsToOutput = DataParsing.filterForSongs(response);
    const callsToOutput = DataParsing.filterForCalls(response);
    $("#song1").attr("src", songsToOutput[0].file);
    $("#song2").attr("src", songsToOutput[1].file);
    $("#call1").attr("src", callsToOutput[0].file);
    $("#call2").attr("src", callsToOutput[1].file);
    $("#display-sounds").append(`<p id="xcAttribution">These sound recordings were supplied by the xeno-canto database.</p>`);
  }
  
  static SongOutput() {
    let outputDiv = $("#songs-output");
    let htmlForSongOutput = `
    <figure>
      <figcaption>Song 1</figcaption>
      <audio 
        controls
        id="song1">
      </audio>
    </figure>
    <figure>
      <figcaption>Song 2</figcaption>
      <audio 
        controls
        id="song2">
      </audio>
    </figure>`;
    
    outputDiv.html(htmlForSongOutput);
  }

  static CallOutput() {
    let outputDiv = $("#calls-output");
    let htmlForCallOutput = `
    <figure>
      <figcaption>Call 1</figcaption>
      <audio 
        controls
        id="call1">
      </audio>
    </figure>
     <figure>
     <figcaption>Call 2</figcaption>
     <audio 
       controls
       id="call2">
     </audio>
   </figure>`;
    outputDiv.html(htmlForCallOutput);
  }
} 

