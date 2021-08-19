import DataParsing from "../src/data-parsing.js";
import { mockXCResponse1, mockXCResponse2, mockXCResponse3, mockXCResponse4, mockXCResponse5, mockXCResponse6, mockXCResponse7, mockXCResponse8, mockXCResponse9, mockDataParsingReturn1 } from "../src/mockXenoCantoResponses.js";

describe ('filterForSongs', () => {

  test('should correctly throw an Error when API response contains no recordings', () => {
    expect(() => {
      DataParsing.filterForSongs(mockXCResponse9);
    }).toThrow(new Error('No relevant recordings found at this time.'));
  });

  test('should correctly prioritize filteredRecordings', () => {
    expect(DataParsing.filterForSongs(mockXCResponse1)).toEqual(mockDataParsingReturn1);
  })

});