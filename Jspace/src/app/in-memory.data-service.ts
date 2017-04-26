import { InMemoryDbService } from 'angular-in-memory-web-api';

// This service just for testing purposes.
// This should be replaced with BE at some place.
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    let codes = [
      {id:1, coded: '', response: 'go on Code!'},
      {id:2, coded: 'let', response: 'You want to declare a variable? What is its name?'},
      {id:3, coded: 'let x', response: 'ok!, cool x? and what is the value?'},
      {id:4, coded: 'let x=1', response: 'Cool! The value is 1. Nice you are done!'},
    ];
    return {codes};
  }
}