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
          console.log(`Starting the run with ${number} test for browser ${suite.title}`);  
        }
        else {
          console.log(`Starting the run with ${number} tests for browser ${suite.title}`);
        }
        
    }
    
      onTestEnd(test: TestCase, result: TestResult) {
        const message = `${result.status} - (${result.duration}ms)`;

        if (result.status === 'passed') {
          console.log(`${test.title} ${bold(green(`✅ ${message}`))}`);
        }
        if (result.status === 'failed') {
          console.log(`${test.title} ${bold(red(`❌ ${message}`))}`);
        }
          
      }
    
      onEnd(result: FullResult) {
        const totalTime = Math.round(result.duration);
        const statusColor = (result.status === 'passed') ? `${bold(green(`✅ ${result.status}`))}` : `${bold(red(`❌ ${result.status}`))}`
        console.log("---------");
        console.log(`Finished with status: ${statusColor}`);
        console.log(`Duration: ${totalTime}ms`);
      }

  }