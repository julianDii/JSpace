import { InMemoryDbService } from 'angular-in-memory-web-api';

// This service just for testing purposes.
// This should be replaced with BE at some place.
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    let codes = [
      {id:1, coded: ' ', response: 'Go on Code!'},
      {id:2, coded: 'var', response: 'You want to declare a variable? What is its name?'},
      {id:3, coded: 'var x', response: 'Ok!, cool x? And what is the value?'},
      {id:4, coded: 'var x=', response: 'Ok!, GOGOGO'},
      {id:5, coded: 'var x=1', response: 'Cool!The value is 1. But you forgot something important.'},
      {id:5, coded: 'var x=1;', response: 'Cool! Nice you are done!'},
    ];
    return {codes};
  }
}