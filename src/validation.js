import $ from 'jquery';

export default class Validation{
  static validation(zipCode){
    if(zipCode.length !== 5){
      $('.showErrors').text("There was an error");
    }
  }
}