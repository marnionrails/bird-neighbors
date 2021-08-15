export default class BirdSoundsService {
  static getSounds(species) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const concatenatedSpecies = species.split(" ").join("+");
      const url = `https://www.xeno-canto.org/api/2/recordings?query=${concatenatedSpecies}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();    
    });
  }
}