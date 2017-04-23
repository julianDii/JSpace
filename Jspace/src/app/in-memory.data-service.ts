import { InMemoryDbService } from 'angular-in-memory-web-api';

// This service just for testing purposes.
// This should be replaced with BE at some place.
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    let codes = [
      {id:1, coded: 'x'},
      {id:2, coded: 'var x = 1;'},
      {id:3, coded: 'function'},
      {id:4, coded: '//comment'},
    ];
    return {codes};
  }
}