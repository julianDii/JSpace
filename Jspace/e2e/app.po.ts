import { browser, element, by } from 'protractor';

export class JspacePage {

  navigateTo() {
    return browser.get('/');
  }

  getOutputText() {
    return element(by.id('ace-output')).getText();

  }
  setInputText(name) {
    return element.all(by.className('ace_text-input')).last().sendKeys(name);
  }

}
