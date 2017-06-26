import { JspacePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('jspace App', () => {
  let page: JspacePage;
  let delay = 200;
  let divInput = element(by.id('ace-input'));
  let inputElm = element.all(by.className('ace_text-input')).last();
  let runButton = element(by.id('run'));
  let nextButton = element(by.id('next'));

  beforeEach(() => {
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

    page.getOutputText().then(function (text) {
      var outputText = 'I am running on JavaScript.To be able to wander around the planet safe and sound, we should slightly raise the oxygen level.At first it’s enough to declare a simple variable called oxygen. You also need to give it a value. Something between 1 and 100 seems to be a good decision to accomplish your next tasks.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
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

    page.getMentorText().then(function (text) {
      var outputText = "Good bye, old friend. May the Force be with you.";
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
      var mentorWrongText = "It seems like your name is too long! It shouldn’t contain more than 20 literals.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(mentorWrongText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskName_usingForbiddenSighnsExclamation_setsPreciseWrongMentorMessage', () => {

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
      var mentorWrongText = "A leading number in your name is not allowed! Even R2D2 knows that.";
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
      var outputText = 'I am running on JavaScript.To be able to wander around the planet safe and sound, we should slightly raise the oxygen level.At first it’s enough to declare a simple variable called oxygen. You also need to give it a value. Something between 1 and 100 seems to be a good decision to accomplish your next tasks.';
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

  it('taskOxygen_missingEqualSighn_leadsToCorrectMentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen  10;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'How do we assign a value to a statement? Check what you forgot!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_toHighNumeric_leadsToCorrectMentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10000000;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'The oxygen tank can’t be filled with more than 100. And since we want to survive outside, you shouldn’t go out with 0 oxygen!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_missingsymicolon_leadsToCorrectMentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 100');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'Something is missing in your input. Do you remember what we learned to put at the end of every command?';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygen_missingIdentififierWithAllOther_leadsToCorrectMentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var = 100;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'I think you spelled oxygen wrong or it is not even there. Otherwise I can’t tell why the compiler tells us that the identifier is incorrect.';
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

  it('taskOxygenDouble_justOxygen_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'Whoops! You have forgotten something. The elements you typed in are only 1.Check if you used the right operator and assigned the result to oxygen.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_varAtBeginning_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('var oxygen = oxygen *2');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'Well, this time we do not need var at the beginning.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_wrongIdetifier_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('peter = oxygen*2;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'You might have misspelled the identifier or it is missing!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_multiplyWithNoNumber_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen*sdkfjs;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'You gotta double your oxygen level. Everything else than the doubled value is going end up in an error!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_wrongOperators_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen-2;');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'To raise the level of your oxygen you’re only allowed to use two operators to do so. That’s either + for addition or * for multiplication.';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskOxygenDouble_justThreeElements_leadsToCorrect_MentorMessage', function () {
    page.setInputText('julian');
    runButton.click();
    nextButton.click();

    page.setInputText('var oxygen = 10;');
    runButton.click();
    nextButton.click();
    browser.sleep(delay);

    page.setInputText('oxygen = oxygen');
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = 'Whoops! You have forgotten something. The elements you typed in are only 3.Check if you used the right operator and assigned the result to oxygen.';
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

  it('taskPrintPlayerObject_wrongFirstThreeElementsleadsToCorrect_MentorMessage', function () {
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

    page.setInputText('var user=');
    runButton.click();

    page.getMentorText().then(function (text) {
      var outputText = 'As said before you need to use the console.log-command to print out an object. Spelling is important!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskPrintPlayerObject_justConsoleLog_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('console.log')
    runButton.click();

    page.getMentorText().then(function (text) {
      var outputText = 'Everything that you want to log has to be in brackets. Might you have forgotten some?';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskPrintPlayerObject_missingStringify_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('console.log(user)')
    runButton.click();

    page.getMentorText().then(function (text) {
      var outputText = 'The JSON.stringify function helps to read the given object way easier. This time it did not work. Check the spelling!';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskPrintPlayerObject_printingNotUser_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('console.log(JSON.stringify(alien);')
    runButton.click();

    page.getMentorText().then(function (text) {
      var outputText = 'Did you forgot which object we want to print out?';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskPrintAlienObject_printingNotAlien_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('console.log(JSON.stringify(user));')
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

    page.setInputText("console.log(JSON.stringify(user));");
    runButton.click();
    
    page.getMentorText().then(function (text) {
      var outputText = 'Did you forgot which object we want to print out?';
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));
    });
  });

  it('taskAddArray_missingUser_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('backpack = [];')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "There’s something wrong at the beginning of your command. misspelled or used the wrong identifier? Check it.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_notAssigning_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack[];')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "Already forgot how to assign values? It is missing here!";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_missingOpeningBrackets_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack = ];')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "opening squared bracket probably missing";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_missingClosingBrackets_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack = [;')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "closing squared bracket probably missing or the brackets are not empty";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_missingClosingBrackets_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack = []')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "This mistake will happen from time to time. You forgot our little friend that we put at the end of every command.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_wrongAmountOfElements_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack = [];uiuiuiui')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "There is something in your code which should not be there. It should contain exactly 7 elements.";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

  it('taskAddArray_notEmptyArray_leadsToCorrect_MentorMessage', function () {
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

    page.setInputText('user.backpack = [uiuiuiui];')
    runButton.click();
    browser.sleep(delay);

    page.getMentorText().then(function (text) {
      var outputText = "closing squared bracket probably missing or the brackets are not empty";
      expect(text.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, "")).toEqual(outputText.replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, ""));

    });
  });

});
