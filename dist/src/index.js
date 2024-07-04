"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyReporter {
    onBegin(config, suite) {
        const number = suite.allTests().length;
        console.log(`Starting the run with ${number} tests`);
    }
    onTestBegin(test, result) {
        console.log(`Starting test ${test.title}`);
    }
    onTestEnd(test, result) {
        console.log(`Finished test ${test.title}: ${result.status}`);
    }
    onEnd(result) {
        console.log(`Finished the run: ${result.status}`);
    }
}
