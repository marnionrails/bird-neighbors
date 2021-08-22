export default class Geocode {
  static getCoordinates(zipCode) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.response.status === "ZERO_RESULTS"){
          console.log("error");
        }
        else if (this.status === 200) {
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