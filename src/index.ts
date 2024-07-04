import type {
    FullConfig, FullResult, Reporter, Suite, TestCase, TestResult
  } from '@playwright/test/reporter';
import { blue, bold, green, red, yellow, magenta, gray } from "picocolors";

let countRetries = 0;


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
        const duration = `(${result.duration}ms)`;

        if (result.status === 'passed') {
          console.log(`${test.title} ${bold(green(`✅ ${result.status}`))} - ${duration}`);
        }
        if (result.status === 'failed') {
          const logRetry = (result.retry > 0) ? `retry ${result.retry}` : '';
          if (result.retry) {
            countRetries++;
        }
          console.log(`${test.title} ${bold(red(`❌ ${result.status}`))} - ${duration} ${logRetry}`);
        }
          
      }
    
      onEnd(result: FullResult) {
        const totalTime = Math.round(result.duration);
        const statusColor = (result.status === 'passed') ? `${bold(green(`✅ ${result.status}`))}` : `${bold(red(`❌ ${result.status}`))}`
        console.log("---------");
        console.log(`Finished with status: ${statusColor}`);
        console.log(`Duration: ${totalTime}ms`);
        console.log(`Retries: ${countRetries}`);
      }

  }