import $ from 'jquery';

export const dynamicSongOutput = () => {
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
};