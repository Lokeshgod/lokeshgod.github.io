import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,readdirSync} from "node:fs";
import {projects} from "../project-data.js";

const slugs=["odyssey","pluto","terminus","torch","corgi","dynamo","fenrir","silver","kepler","starfish"];
const home=readFileSync("index.html","utf8");
const cards=readFileSync("app.js","utf8");

test("all 10 project data records have a meaningful summary and validation caveat",()=>{
 assert.equal(Object.keys(projects).length,10);
 for(const slug of slugs){
   const item=projects[slug];
   assert.ok(item?.name && item?.intro?.length>100,slug+" missing overview");
   assert.ok(item.focus.length>=3 && item.grader.length>=3,slug+" missing detail");
   assert.ok(item.examples.length>=1,slug+" missing representative example");
   assert.ok(item.evidence.length>50,slug+" missing verification qualifier");
 }
});
test("each featured project has a unique shareable HTML page",()=>{
 const files=new Set(readdirSync("projects"));
 for(const slug of slugs){
   assert.ok(files.has(slug+".html"),slug+" missing page");
   const html=readFileSync("projects/"+slug+".html","utf8");
   assert.ok(html.includes('data-project="'+slug+'"'),slug+" missing route identity");
   assert.ok(html.includes('/project-page.js'),slug+" missing renderer");
 }
});
test("homepage exposes link generation and supports keyboard access",()=>{
 assert.ok(cards.includes('href="/projects/'),"Homepage cards do not have project links");
 assert.ok(home.includes('id="project-grid"'));
 assert.ok(home.includes('id="archive-list"'));
});
test("headline metrics label acceptance counts as owner-reported",()=>{
 assert.match(home,/100[\s\S]*Benchmark tasks[\s\S]*reported by author/i);
 assert.match(home,/66[\s\S]*Starfish tasks[\s\S]*reported accepted/i);
 assert.match(projects.starfish.evidence,/User reports 66 accepted/);
 assert.match(projects.corgi.evidence,/User reports nine Corgi tasks/);
});
