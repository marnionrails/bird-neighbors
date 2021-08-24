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
} 

