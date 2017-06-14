import { JspacePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('jspace App', () => {
  let page: JspacePage;
  let delay = 500;
  let divInput = element(by.id('ace-input'));
  let inputElm = element.all(by.className('ace_text-input')).last();
  let runButton = element(by.id('run'));
  let nextButton = element(by.id('next'));

  beforeEach(() => {
    // If true, Protractor will not attempt to synchronize with the page before performing actions
    browser.ignoreSynchronization = true;
    browser.get('/');
    page = new JspacePage();
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  })

  it('goTo_taskOxygen', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();
  });

  it('goTo_taskOxygenDouble', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();

    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'Double up your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('goTo_TaskPrintPlayerObject', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'I just made a system check and it seems like we need more aluminium to repair our spaceship.Please check if you still have your backpack - maybe it contains the required material.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_TaskTaskAddArray', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'It seems like you lost your backpack. Well then let us make you a new one.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_TaskElementToArray', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('user.backpack = [];');
    runButton.click();
    nextButton.click();
    browser.sleep(200);

    page.getOutputText().then(function (text) {
      var outputText = "Cool! We met some nice aliens who are willing to trade with us.Let's accept the offered 'aluminium-shard'.To do that, we will need to push it to our backpack-array.So go on, address the array first and push the 'aluminium-shard'-element to it.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_TaskPrintAlienObject', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('user.backpack = [];');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push('aluminium-shard');");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = "The friendly alien has even more to offer! Let's take a look into his bag.Print out the alien-object.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_taskCopyArrayElement', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('user.backpack = [];');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push('aluminium-shard');");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("console.log(JSON.stringify(alien));");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = "Since we move in a JavaScript-galaxy we can just easily copy the item to our backpack-array.Now go on and copy the aluminium-helmet to our backpack-array!";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_TaskLoopArray', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('user.backpack = [];');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push('aluminium-shard');");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("console.log(JSON.stringify(alien));");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push(alien.backpack[0]);");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = "Time to transfer our items to the board computer.So that it can calculate the amount of resources and time that we need to repairthe ship.Push the items from our backpack to the inventory of the board computer with afor-loop.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('goTo_EndGame', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('console.log(JSON.stringify(user));');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('user.backpack = [];');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push('aluminium-shard');");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("console.log(JSON.stringify(alien));");
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText("user.backpack.push(alien.backpack[0]);");
    runButton.click();
    nextButton.click();
    browser.sleep(200);

    page.setInputText("for(var i = 0; i < user.backpack.length; i ++) {boardcomputer.inventory.push(user.backpack[i]);}");
    runButton.click();
    nextButton.click();
    browser.sleep(200);

    page.getOutputText().then(function (text) {
      var outputText = "GAME OVER";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskName_nameWithleadingNumbers_isFalse', () => {

    page.setInputText('33kkk');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });

  });

  it('taskName_nameWithMoreThenTwenty_setsPreciseWrongMentorMessage', () => {

    page.setInputText('sakdjalskDJASLKdjASLKDJalskdjalsKDJASLKDJASKJD676');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var mentorWrongText = "Oh no, your name is too long,it can have only maximal 20 signs.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(mentorWrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_usingForbiddenSighns_setsPreciseWrongMentorMessage', () => {

    page.setInputText('!');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var mentorWrongText = "Oh no, you have probably used some forbidden signs.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(mentorWrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_leadingNumbers_setsPreciseWrongMentorMessage', () => {

    page.setInputText('5julian');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var mentorWrongText = "Leading numbers are not allowed.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(mentorWrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_nameWithMoreThenTwenty_isFalse', () => {

    page.setInputText('sakdjalskDJASLKdjASLKDJalskdjalsKDJASLKDJASKJD');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_enterCorrectName_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      let trueText = 'You are logged in.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(trueText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_AfterWrongName_btnNext_isDisabled', function () {
    page.setInputText('23kjkkjk');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var wrongText = 'Sorry, this username does not seem to be a valid name. Please try to log in again!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(wrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
    expect(runButton.isDisplayed()).toBeTruthy();
    expect(nextButton.isDisplayed()).toBeFalsy();
  });

  it('taskName_afterEnterCorrectNameRunisDisabled', function () {
    page.setInputText('julian');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      let trueText = 'You are logged in.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(trueText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
    expect(runButton.isDisplayed()).toBeFalsy();
    expect(nextButton.isDisplayed()).toBeTruthy();
  });

  it('taskName_appStartsCorrectAfterBrowserRefresh_AtStartOfTaskTwo', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();
    browser.refresh();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'I am running on JavaScript.To be able to wander around the planet safe and sound, we should slightly raise the oxygen level.At first it’s enough to declare a simple variable called oxygen. You also need to give it a value. 10 seems to be a good decision to accomplish your next tasks.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });

  });

  it('taskOxygen_validInput_isTrue', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    browser.sleep(delay);

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
    browser.sleep(delay);

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
    browser.sleep(delay);

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
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });
  it('taskOxygen_toHighNumeric_isFalse', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 1000000000000;');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'Try to set your oxygen level again.';
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
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*2;');
    runButton.click();
    browser.sleep(delay);

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
    browser.sleep(delay);


    page.setInputText('oxygen *=2;');
    runButton.click();
    browser.sleep(delay);

    page.getOutputText().then(function (text) {
      var outputText = 'You have doubled your oxygen level.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_validInput3_isTrue', function () {
    page.setInputText('jana');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 84;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen + oxygen;');
    runButton.click();
    browser.sleep(delay);

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
    browser.sleep(delay);

    page.setInputText('oxygen = peter*2;');
    runButton.click();
    browser.sleep(delay);


    page.getOutputText().then(function (text) {
      var outputText = 'An error happened. Try to double up your oxygen level again.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

});
