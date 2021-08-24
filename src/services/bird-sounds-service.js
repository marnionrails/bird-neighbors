export default class BirdSoundsService {
  static async getSounds(species) {
    const concatenatedSpecies = species.split(" ").join("+");
    return fetch(`https://babysfirstproxy.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=${concatenatedSpecies}`)
      .then(function(response) {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    })
  }
}