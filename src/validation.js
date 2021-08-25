export default class Validation{
  static validation(zipCode) {
    if (zipCode.length !== 5) {
      throw new Error("Invalid zip code. Please enter a valid 5-digit zip code.");
    }
  }
}