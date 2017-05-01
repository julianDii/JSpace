QUnit.module( "group a" );

// LOGGING
QUnit.on( "runEnd", function( data ) {
    console.log( "Passed: " + data.testCounts.passed );
    console.log( "Failed: " + data.testCounts.failed );
    console.log( "Skipped: " + data.testCounts.skipped );
    console.log( "Todo: " + data.testCounts.todo );
    console.log( "Total: " + data.testCounts.total );
} );

QUnit.begin(function( details ) {
    console.log( "Test Suite Starting." );
});

QUnit.done(function( details ) {
    console.log( "Test Suit Ending. Results: Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});

QUnit.log(function( details ) {
    if ( details.result ) {
        return;
    }
    var loc = details.module + ": " + details.name + ": ",
        output = "FAILED: " + loc + ( details.message ? details.message + ", " : "" );

    if ( details.expected || details.actual) {
        output += "expected: " + details.expected + ", actual: " + details.actual;
    }
    if ( details.source ) {
        output += ", " + details.source;
    }
    console.log( output );

});
QUnit.testStart(function( details ) {
    console.log( "Now Running Test: ", details.module, details.name );
});

QUnit.testDone(function( details ) {
    console.log( "Finished Running Test: ", details.module, details.name, "Failed/total: ", details.failed, details.total);
});

// TESTS
QUnit.test( "helloWorld()", function( assert ) {
    assert.equal( helloWorld(), "hello world", "We expect 'hello world'" );
});

