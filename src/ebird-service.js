export class EbirdService {
  static getData(location) {
    return fetch(`https://api.ebird.org/v2/data/obs/${location}/recent`, {
      headers: {
        'x-ebirdapitoken': `${process.env.API_KEY}`,
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

export class NearbyService {  
  static nearby(lat, lng) {
    return fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}`, {
      headers: {
        'x-ebirdapitoken': `${process.env.API_KEY}`,
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



/*      headers: {
        
      }

    }); */

/* Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
} */