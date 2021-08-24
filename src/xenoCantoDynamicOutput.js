import $ from 'jquery';

export default class DynamicSoundDisplay {
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

