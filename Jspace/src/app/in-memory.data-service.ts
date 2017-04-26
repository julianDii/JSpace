import { InMemoryDbService } from 'angular-in-memory-web-api';

// This service just for testing purposes.
// This should be replaced with BE at some place.
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    let codes = [
      {id:1, coded: 'x', response: 'go on Code!'},
      {id:2, coded: 'var', response: 'Do you want to declare a variable?'},
      {id:3, coded: 'var x=1;', response: 'nice! You declared a variable'},
      {id:4, coded: 'function()', response: 'U going for a function?'},
      {id:5, coded: 'function()x={var y=1;};', response: 'cool! This is a correct function'},
      {id:6, coded: '//comment', response: 'This is a comment'},
    ];
    return {codes};
  }
}