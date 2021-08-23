import $ from 'jquery';

export default class Validation{
  static validation(zipCode){
    if(zipCode.length !== 5){
     throw new Error("Invalid Zipcode. Please enter valid 5-digit zip code");
    }
  }
}