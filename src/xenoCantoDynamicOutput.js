import $ from 'jquery';
import DataParsing from './data-parsing.js';

export default class DynamicSoundDisplay {
  static displayBirdSounds(xenoCantoResponse, commonName) {
    const callsToOutput = DataParsing.filterForCalls(xenoCantoResponse);
    $("#common-name").text(commonName);
    $("#call1").attr("src", callsToOutput[0].file);
    $("#call2").attr("src", callsToOutput[1].file);
    $("#display-sounds").append(`<p>These sound recordings were supplied by the xeno-canto database.</p>`);
  }
  
  static SongOutput(eBirdResponse, xenoCantoResponse) {
    let outputDiv = $("#songs-output");
    let htmlForSongOutput = ``;
    const songsToOutput = DataParsing.filterForSongs(xenoCantoResponse);
    eBirdResponse.forEach((instance) => {
      const commonName = instance.comName;
      //need to use regex below in concatenatedCommonName to filter out any non letter characters (except hyphens) that shouldn't be in an html id
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
      //the line below is what isn't working. The string inside the jQuery parens prints out the correct string when console.logged.
      // $(`#song1${concatenatedCommonName}`).attr("src", songsToOutput[0].file);
      // $(`#song2${concatenatedCommonName}`).attr("src", songsToOutput[1].file);

      //The next 2 lines don't work and I have no idea why
      //they don't work even when the bird name doesn't include characters such as '
      //I update the bird name to match whatever eBird is currently returning -- to give context this is matching the code in lines 26 & 33
      //This is all part of trouble shooting why lines 37 and 38 don't work. There's no reason for them to work if the lines below don't work first.
      $("#song1Anna's-Hummingbird").attr("src", songsToOutput[0].file);
      $("#song2Anna's-Hummingbird").attr("src", songsToOutput[1].file);

      // The code below correctly console.logs the files
      console.log(songsToOutput[0].file);
      console.log(songsToOutput[1].file);
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