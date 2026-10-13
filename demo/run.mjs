#!/usr/bin/env node
import {runSuite} from "./evaluator.mjs";
for (const candidate of ["starter","partial","reference"]) {
  const result = runSuite(candidate);
  console.log("\n"+candidate.toUpperCase()+" — "+result.passed+"/"+result.total+" · "+(result.reward*100).toFixed(1)+"%");
  for (const test of result.results) console.log("  "+(test.passed?"PASS":"FAIL")+"  "+test.name);
}
