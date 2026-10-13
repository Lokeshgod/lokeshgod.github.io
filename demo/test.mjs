import test from "node:test";
import assert from "node:assert/strict";
import {runSuite,scenarios,reference,partial} from "./evaluator.mjs";
test("public scenario names are unique",()=>{
  assert.equal(new Set(scenarios.map(s=>s.name)).size,scenarios.length);
});
test("starter receives zero, reference receives full credit",()=>{
  assert.equal(runSuite("starter").passed,0);
  assert.equal(runSuite("reference").passed,scenarios.length);
  assert.equal(runSuite("starter").reward,0);
  assert.equal(runSuite("reference").reward,1);
});
test("partial implementation earns intermediate credit",()=>{
  const r=runSuite("partial"); assert.ok(r.passed>0&&r.passed<r.total);
});
test("reference accepts identical historical replay",()=>{
  assert.deepEqual(reference([{stream:"x",sequence:1,delta:3},{stream:"x",sequence:2,delta:4},{stream:"x",sequence:1,delta:3}]),{x:7});
});
test("reference rejects conflicting replay and gaps",()=>{
  assert.throws(()=>reference([{stream:"x",sequence:1,delta:3},{stream:"x",sequence:1,delta:4}]));
  assert.throws(()=>reference([{stream:"x",sequence:2,delta:3}]));
});
test("incomplete implementation does not reject conflicting replay",()=>{
  assert.deepEqual(partial([{stream:"x",sequence:1,delta:3},{stream:"x",sequence:1,delta:4}]),{x:7});
});
test("unknown candidate cannot be graded",()=>{
  assert.throws(()=>runSuite("other"));
});
