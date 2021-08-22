export default class DataParsing {
  static filterForSongs(response) {
    //mockXCSongResponse9
    if (response.recordings.length === 0) {
      throw new Error('No relevant song recordings found at this time.');
    } else {
      let bestQualityArray = [];
      let songRecordingsArray = [];
      let soloRecordingsArray = [];
      let uSRecordingsArray = [];
      response.recordings.forEach((recording) => {
        if (recording.q === "A") {
          bestQualityArray.push(recording);
        } if (recording.type.includes("song")) {
          songRecordingsArray.push(recording);
        } if (recording.also === [""]) {
          soloRecordingsArray.push(recording);
        }
        if (recording.cnt === "United States") {
          uSRecordingsArray.push(recording);
        }
      });
      let intersection1 = bestQualityArray.filter(recording => soloRecordingsArray.includes(recording));
      let intersection2 = intersection1.filter(recording => songRecordingsArray.includes(recording));
      let intersection3 = bestQualityArray.filter(recording => songRecordingsArray.includes(recording));
      let filteredRecordings = intersection2.filter(recording => uSRecordingsArray.includes(recording));
      let songsToOutput = [];
      //mockXCSongResponse1
      if (filteredRecordings.length >= 2) {
        for (let index = 0; index <= 1; index ++) {
          songsToOutput.push(filteredRecordings[index]);
        }
      } 
      //mockXCSongResponse2
      else if (filteredRecordings.length === 1 && intersection2.length > 1) {
        songsToOutput.push(filteredRecordings[0]);
        songsToOutput.push(intersection2[1]);
      } 
      //mockXCSongResponse3
      else if (filteredRecordings.length === 0 && intersection2.length >= 2) {
        songsToOutput.push(intersection2[0]);
        songsToOutput.push(intersection2[1]);
      } 
      //mockXCSongResponse4
      else if (filteredRecordings.length === 0 && intersection2.length === 1 && intersection3.length >= 2) {
        songsToOutput.push(intersection2[0]);
        songsToOutput.push(intersection3[1]);
      } 
      //mockXCSongResponse5
      else if (filteredRecordings.length === 0 && intersection2.length === 0 &&intersection3.length >= 2) {
        songsToOutput.push(intersection3[0]);
        songsToOutput.push(intersection3[1]);
      } 
      //mockXCSongResponse6
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 1 && songRecordingsArray.length >= 2) {
        songsToOutput.push(intersection3[0]);
        songsToOutput.push(songRecordingsArray[1]);
      } 
      //mockXCSongResponse7
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && songRecordingsArray.length >= 2) {
        songsToOutput.push(songRecordingsArray[0]);
        songsToOutput.push(songRecordingsArray[1]);
      } 
      //mockXCSongResponse8
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && songRecordingsArray.length === 1) {
        songsToOutput.push(songRecordingsArray[0]);
      } if (songsToOutput.length >= 1) {
        return songsToOutput;
      } 
      //mockXCResponseSong10
      else {
        throw new Error('No relevant song recordings available at this time.');
      }
    }
  }

  static filterForCalls(response) {
    //mockXCCallResponse9
    if (response.recordings.length === 0) {
      throw new Error('No relevant call recordings found at this time.');
    } else {
      let bestQualityArray = [];
      let callRecordingsArray = [];
      let soloRecordingsArray = [];
      let uSRecordingsArray = [];
      response.recordings.forEach((recording) => {
        if (recording.q === "A") {
          bestQualityArray.push(recording);
        } if (recording.type.includes("call")) {
          callRecordingsArray.push(recording);
        } if (recording.also === [""]) {
          soloRecordingsArray.push(recording);
        }
        if (recording.cnt === "United States") {
          uSRecordingsArray.push(recording);
        }
      });
      let intersection1 = bestQualityArray.filter(recording => soloRecordingsArray.includes(recording));
      let intersection2 = intersection1.filter(recording => callRecordingsArray.includes(recording));
      let intersection3 = bestQualityArray.filter(recording => callRecordingsArray.includes(recording));
      let filteredRecordings = intersection2.filter(recording => uSRecordingsArray.includes(recording));
      let callsToOutput = [];
      //mockXCCallResponse1
      if (filteredRecordings.length >= 2) {
        for (let index = 0; index <= 1; index ++) {
          callsToOutput.push(filteredRecordings[index]);
        }
      } 
      //mockXCCallResponse2
      else if (filteredRecordings.length === 1 && intersection2.length > 1) {
        callsToOutput.push(filteredRecordings[0]);
        callsToOutput.push(intersection2[1]);
      } 
      //mockXCCallResponse3
      else if (filteredRecordings.length === 0 && intersection2.length >= 2) {
        callsToOutput.push(intersection2[0]);
        callsToOutput.push(intersection2[1]);
      } 
      //mockXCCallResponse4
      else if (filteredRecordings.length === 0 && intersection2.length === 1 && intersection3.length >= 2) {
        callsToOutput.push(intersection2[0]);
        callsToOutput.push(intersection3[1]);
      } 
      //mockXCCallResponse5
      else if (filteredRecordings.length === 0 && intersection2.length === 0 &&intersection3.length >= 2) {
        callsToOutput.push(intersection3[0]);
        callsToOutput.push(intersection3[1]);
      } 
      //mockXCCallResponse6
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 1 && callRecordingsArray.length >= 2) {
        callsToOutput.push(intersection3[0]);
        callsToOutput.push(callRecordingsArray[1]);
      } 
      //mockXCCallResponse7
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && callRecordingsArray.length >= 2) {
        callsToOutput.push(callRecordingsArray[0]);
        callsToOutput.push(callRecordingsArray[1]);
      } 
      //mockXCCallResponse8
      else if (filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && callRecordingsArray.length === 1) {
        callsToOutput.push(callRecordingsArray[0]);
      } if (callsToOutput.length >= 1) {
        return callsToOutput;
      } 
      //mockXCResponseCall10
      else {
        throw new Error('No relevant call recordings available at this time.');
      }
    }
  }
}