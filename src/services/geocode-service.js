export default class GeocodeService {
  static getCoordinates(zipCode) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.GEOCODE_API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error((`${response.status}: ${response.statusText}`));
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}