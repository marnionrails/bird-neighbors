import DataParsing from "../src/data-parsing.js";
import { mockXCSongResponse1, mockXCSongResponse2, mockXCSongResponse3, mockXCSongResponse4, mockXCSongResponse5, mockXCSongResponse6, mockXCSongResponse7, mockXCSongResponse8, mockXCSongResponse9, mockXCSongResponse10, mockDataParsingSongReturn1, mockDataParsingSongReturn2, mockDataParsingSongReturn3, mockDataParsingSongReturn4, mockDataParsingSongReturn5, mockDataParsingSongReturn6, mockDataParsingSongReturn7, mockDataParsingSongReturn8} from "../src/mockXenoCantoSongResponses.js";
import { mockXCCallResponse1, mockXCCallResponse2, mockXCCallResponse3, mockXCCallResponse4, mockXCCallResponse5, mockXCCallResponse6, mockXCCallResponse7, mockXCCallResponse8, mockXCCallResponse9, mockXCCallResponse10, mockDataParsingCallReturn1, mockDataParsingCallReturn2, mockDataParsingCallReturn3, mockDataParsingCallReturn4, mockDataParsingCallReturn5, mockDataParsingCallReturn6, mockDataParsingCallReturn7, mockDataParsingCallReturn8} from "../src/mockXenoCantoCallResponses.js";

describe ('filterForSongs', () => {

  test('should correctly throw an Error when API response contains no recordings', () => {
    expect(() => {
      DataParsing.filterForSongs(mockXCSongResponse9);
    }).toThrow(new Error('No relevant song recordings found at this time.'));
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
    }).toThrow(new Error('No relevant song recordings available at this time.'));
  });
});

describe ('filterForCalls', () => {

  test('should correctly throw an Error when API response contains no recordings', () => {
    expect(() => {
      DataParsing.filterForCalls(mockXCCallResponse9);
    }).toThrow(new Error('No relevant call recordings found at this time.'));
  });

  test('should correctly prioritize filteredRecordings', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse1)).toEqual(mockDataParsingCallReturn1);
  });

  test ('should correctly prioritize when filteredRecordings.length === 1', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse2)).toEqual(mockDataParsingCallReturn2);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length >= 2', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse3)).toEqual(mockDataParsingCallReturn3);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 1 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse4)).toEqual(mockDataParsingCallReturn4);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse5)).toEqual(mockDataParsingCallReturn5);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 1 && callRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse6)).toEqual(mockDataParsingCallReturn6);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && callRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse7)).toEqual(mockDataParsingCallReturn7);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && callRecordingsArray.length === 1', () => {
    expect(DataParsing.filterForCalls(mockXCCallResponse8)).toEqual(mockDataParsingCallReturn8);
  });

  test('should correctly throw an Error when songsToOutput.length === 0', () => {
    expect(() => {
      DataParsing.filterForCalls(mockXCCallResponse10);
    }).toThrow(new Error('No relevant call recordings available at this time.'));
  });
});