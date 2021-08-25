import $ from 'jquery';
import DataParsing from './data-parsing.js';

export default class DynamicSoundDisplay {
  static displayBirdSounds(xenoCantoResponse, commonName) {
    const callsToOutput = DataParsing.filterForCalls(xenoCantoResponse);
    $("#common-name").text(commonName);
    $("#call1").attr("src", callsToOutput[0].file);
    $("#call2").attr("src", callsToOutput[1].file);
  }
  
  static SongOutput(eBirdResponse, xenoCantoResponse) {
    let outputDiv = $("#songs-output");
    let htmlForSongOutput = ``;
    const songsToOutput = DataParsing.filterForSongs(xenoCantoResponse);
    eBirdResponse.forEach((instance) => {
      const commonName = instance.comName;
      const concatenatedCommonName = commonName.split(" ").join("-");
      htmlForSongOutput += `
      <figure>
        <figcaption>Song ${eBirdResponse.indexOf('instance') + 2}</figcaption>
        <audio 
          controls
          id=song1${concatenatedCommonName}>
        </audio>
      </figure>
      <figure>
      <figcaption>Song 2</figcaption>
      <audio 
        controls
        id="song2${concatenatedCommonName}">
      </audio>
    </figure>`;
      //the line below is what isn't working. The string inside the jQuery parens prints out the correct string when console.logged but it isn't being recognized as a function. I suspect its because I'm trying to pass a template literal into jQuery but the internet suggests that a template literal should be okay here so I don't actually know what's wrong.
      $(`#song1${concatenatedCommonName}`).attr("src", songsToOutput[0].file);
      $(`#song2${concatenatedCommonName}`).attr("src", songsToOutput[1].file);
    });
    $('#display-sounds').show();
    
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