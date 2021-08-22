export default class NearbyService {  
  static nearby(lat, lng, rad) {
    return fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}&&dist=${rad}&sort=date&maxResults=1`, {
      headers: {
        'x-ebirdapitoken': `${process.env.API_KEY2}`,
      },
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}


