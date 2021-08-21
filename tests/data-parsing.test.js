import DataParsing from "../src/data-parsing.js";
import { mockXCResponse1, mockXCResponse2, mockXCResponse3, mockXCResponse4, mockXCResponse5, mockXCResponse6, mockXCResponse7, mockXCResponse8, mockXCResponse9, mockDataParsingReturn1, mockDataParsingReturn2, mockDataParsingReturn3, mockDataParsingReturn4, mockDataParsingReturn5, mockDataParsingReturn6, mockDataParsingReturn7 } from "../src/mockXenoCantoResponses.js";

describe ('filterForSongs', () => {

  test('should correctly throw an Error when API response contains no recordings', () => {
    expect(() => {
      DataParsing.filterForSongs(mockXCResponse9);
    }).toThrow(new Error('No relevant recordings found at this time.'));
  });

  test('should correctly prioritize filteredRecordings', () => {
    expect(DataParsing.filterForSongs(mockXCResponse1)).toEqual(mockDataParsingReturn1);
  });

  test ('should correctly prioritize when filteredRecordings.length === 1', () => {
    expect(DataParsing.filterForSongs(mockXCResponse2)).toEqual(mockDataParsingReturn2);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCResponse3)).toEqual(mockDataParsingReturn3);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 1 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCResponse4)).toEqual(mockDataParsingReturn4);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCResponse5)).toEqual(mockDataParsingReturn5);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 1 && songRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCResponse6)).toEqual(mockDataParsingReturn6);
  });

  test ('should correctly prioritize when filteredRecordings.length === 0 && intersection2.length === 0 && intersection3.length === 0 && songRecordingsArray.length >= 2', () => {
    expect(DataParsing.filterForSongs(mockXCResponse7)).toEqual(mockDataParsingReturn7);
  });

});