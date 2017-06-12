import { JspacePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('jspace App', () => {
  let page: JspacePage;
  let divInput = element(by.id('ace-input'));
  let inputElm = element.all(by.className('ace_text-input')).last();
  let runButton = element(by.css('.button'));
  let nextButton = element(by.id('btnNext'));

  beforeEach(() => {
    // If true, Protractor will not attempt to synchronize with the page before performing actions
    browser.ignoreSynchronization = true;
    browser.get('/');
    page = new JspacePage();
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  })

  it('taskName_nameWithleadingNumbers_isFalse', () => {

    page.setInputText('33kkk');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });


  });

  it('taskName_nameWithMoreThenTwenty_isFalse', () => {

    page.setInputText('sakdjalskDJASLKdjASLKDJalskdjalsKDJASLKDJASKJD');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_leadingWhitespace_isFalse', () => {

    page.setInputText('     julian');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_enterCorrectName_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      let trueText = 'You are logged in.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(trueText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_AfterWrongName_btnNext_isDisabled', function () {
    page.setInputText('23kjkkjk');
    runButton.click();
    nextButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });


  });

  it('taskName_afterEnterCorrektNameRunisDisabled', function () {
    page.setInputText('julian');
    runButton.click();
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      let trueText = 'You are logged in.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(trueText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_appStartsCorrectAfterBrowserRefresh_AtStartOfTaskTwo', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();
    browser.refresh();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'I am running on JavaScript. To get back on track, you need to program and reconfigure me. Firstly it’s enough to declare a simple variable called oxygen. You need to give it a value. 10 seems to be a good decision to accomplish your next tasks.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });


  });

  it('taskName_goToTaskTwo', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();
  });

  it('taskOxygen_validInput_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'You have set your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_wrongIdetifier_isFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxigen = 10;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_missingKeywordisFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('oxygen = 10;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_missingSimicolon_isFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });
  it('taskOxygen_tohighNumeric_isFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 1000000000000;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_goToTaskThree', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();

    nextButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'Double up your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_validInput_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(100);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'You have doubled your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_validInput2_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(100);


    page.setInputText('oxygen *=2;');
    runButton.click();
    browser.sleep(100);

    page.getOutputText().then(function (text) {
      var outputText = 'You have doubled your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_differentIdentifier_isFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();
    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(1000);

    page.setInputText('oxygen = peter*2;');
    runButton.click();

    browser.sleep(3000);

    page.getOutputText().then(function (text) {
      var outputText = 'An error happened. Try to double up your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

      browser.sleep(5000);
    });
  });
});