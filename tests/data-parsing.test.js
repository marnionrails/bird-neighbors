import DataParsing from "../src/data-parsing.js";
import { mockXCSongResponse1, mockXCSongResponse2, mockXCSongResponse3, mockXCSongResponse4, mockXCSongResponse5, mockXCSongResponse6, mockXCSongResponse7, mockXCSongResponse8, mockXCSongResponse9, mockXCSongResponse10, mockDataParsingSongReturn1, mockDataParsingSongReturn2, mockDataParsingSongReturn3, mockDataParsingSongReturn4, mockDataParsingSongReturn5, mockDataParsingSongReturn6, mockDataParsingSongReturn7, mockDataParsingSongReturn8} from "../src/mockXenoCantoSongResponses.js";

describe ('filterForSongs', () => {

  test('should correctly throw an Error when API response contains no recordings', () => {
    expect(() => {
      DataParsing.filterForSongs(mockXCSongResponse9);
    }).toThrow(new Error('No relevant recordings found at this time.'));
  });

  test('should correctly prioritize filteredRecordings', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse1)).toEqual(mockDataParsingSongReturn1);
  });

  test ('should correctly prioritize when filteredRecordings.length === 1', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse2)).toEqual(mockDataParsingSongReturn2);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse3)).toEqual(mockDataParsingSongReturn3);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 1 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse4)).toEqual(mockDataParsingSongReturn4);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse5)).toEqual(mockDataParsingSongReturn5);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 1 && songRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse6)).toEqual(mockDataParsingSongReturn6);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && songRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse7)).toEqual(mockDataParsingSongReturn7);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && songRecordingsArray.length === 1', () => {
    expect(DataParsing.filterForSongs(mockXCSongResponse8)).toEqual(mockDataParsingSongReturn8);
  });

  test('should correctly throw an Error when songsToOutput.length === 0', () => {
    expect(() => {
      DataParsing.filterForSongs(mockXCSongResponse10);
    }).toThrow(new Error('No relevant recordings available at this time.'));
  });
});