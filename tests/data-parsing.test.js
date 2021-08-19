import DataParsing from "../src/data-parsing.js";
import { mockXCResponse1, mockXCResponse2, mockXCResponse3, mockXCResponse4, mockXCResponse5, mockXCResponse6, mockXCResponse7, mockXCResponse8, mockXCResponse9 } from "../src/mockXenoCantoResponses.js"

describe ('filterForSongs', () => {

  test('should determine when API response contains no recordings', () => {
    expect(DataParsing.filterForSongs(mockXCResponse9)).toEqual(Error);
  });
});