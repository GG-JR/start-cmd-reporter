import type {
    FullConfig, FullResult, Reporter, Suite, TestCase, TestResult
  } from '@playwright/test/reporter';
import { blue, bold, green, red, yellow, magenta, gray } from "picocolors";


  export default class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
        const number = suite.allTests().length;
        if (number === 0) {
          console.log(`${bold(red(`❌  No tests found`))}`); 
        }
        if (number === 1) {
          console.log(`Starting the run with ${number} test`);  
        }
        else {
          console.log(`Starting the run with ${number} tests`);
        }
        
    }
    
      onTestEnd(test: TestCase, result: TestResult) {
        if (result.status === 'passed') {
          console.log(`${test.title} ${bold(green(`✅ ${result.status}`))}`);
        }
        if (result.status === 'failed') {
          console.log(`${test.title} ${bold(red(`❌ ${result.status}`))}`);
        }
          
      }
    
      onEnd(result: FullResult) {
        console.log(`Finished the run: ${result.status}`);
      }

  }