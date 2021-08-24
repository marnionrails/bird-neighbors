export default class GeocodeErrorHandling {
  static assessResponseStatus(response) {
    if (response.status !== "OK") {
      throw new Error(`${response.status}: ${response.error_message}`);
    }
  }
}