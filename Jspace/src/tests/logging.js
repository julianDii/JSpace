// LOGGING

QUnit.begin(function (details) {
  console.log("Test Suite Starting.");
});

QUnit.done(function (details) {
  console.log("Test Suite Ending. Results:")
  console.log("Total: ", details.total);
  console.log("Passed: ", details.passed);
  console.log("Failed: ", details.failed);
  console.log("Runtime: ", details.runtime);
});

QUnit.log(function (details) {
  if (details.result) {
    return;
  }
  var loc = details.module + ": " + details.name + ": ",
    output = "FAILED: " + loc + ( details.message ? details.message + ", " : "" );

  if (details.expected || details.actual) {
    output += "expected: " + details.expected + ", actual: " + details.actual;
  }
  if (details.source) {
    output += ", " + details.source;
  }
  console.log(output);

});
QUnit.testStart(function (details) {
  console.log("Now Running Test: ", details.module, details.name);
});

QUnit.testDone(function (details) {
  console.log("Finished Running Test: ", details.module, details.name, "Failed/total: ", details.failed, details.total);
});
