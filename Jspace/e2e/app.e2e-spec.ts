import { JspacePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('jspace App', () => {
  let page: JspacePage;
  let divInput = element(by.id('ace-input'));
  let inputElm = element.all(by.className('ace_text-input')).last();
  let runButton = element(by.id('runBtn'));
  let nextButton = element(by.id('btnNext'));

  beforeEach(() => {
    //page = new JspacePage();
  });

  it('task name with correckt name', function () {
    // If true, Protractor will not attempt to synchronize with the page before performing actions
    browser.ignoreSynchronization = true;
    browser.get('/');
    browser.sleep(3000); // sorry but no angular page
    browser.actions().doubleClick(divInput).perform();
    inputElm.sendKeys('Julian');
    browser.sleep(3000); // to let you see the result
    browser.actions().mouseMove(runButton).perform();
    runButton.click();
   
    browser.sleep(4000);
    nextButton.click();
    browser.sleep(4000);
  });
});