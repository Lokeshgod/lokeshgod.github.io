import {runSuite} from "./demo/evaluator.mjs";

const selected = [
  {name:"Project Odyssey",category:"agents",field:"LONG-HORIZON SYSTEMS",description:"Stateful event processing, transactional consistency, revisions, exactly-once behavior, durable recovery, and cross-feature verification.",tags:["Python","Stateful systems","Recovery"],status:"Locally validated",statusType:"local"},
  {name:"Project Pluto",category:"agents",field:"TERMINAL AGENTS",description:"Terminal-Bench-style development workflows with reproducible environments, task contracts, independent grading, and reference solutions.",tags:["Linux","Terminal agents","Tests"],status:"Development record",statusType:"general"},
  {name:"Project Terminus",subtitle:"Edition 2",category:"agents",field:"SYSTEMS ENGINEERING",description:"Go policy-reconciliation benchmark covering filesystem state, systemd configuration, atomic replacement, idempotency, and regression behavior.",tags:["Go","Systemd","Atomicity"],status:"Locally validated",statusType:"local"},
  {name:"Project Torch",category:"research",field:"ML FRAMEWORKS",description:"JAX transformation and custom-derivative challenges with executable reference paths, regression gates, and partial-repair probes.",tags:["JAX","Autodiff","pytest"],status:"Locally validated",statusType:"local"},
  {name:"Project Corgi",category:"research",field:"REPOSITORY ENGINEERING",description:"Complex compiler/runtime and symbolic-computation benchmark candidates built around multi-file changes and conformance coverage.",tags:["Cython","SymPy","Conformance"],status:"9 tasks reported",statusType:"general"},
  {name:"Project Dynamo",category:"evaluation",field:"BENCHMARK REPAIR",description:"Assessment harness repairs, reproducibility improvements, reference paths, and validation against incomplete implementations.",tags:["Verifier","Regression","Harnesses"],status:"Revision work",statusType:"general"},
  {name:"Project Fenrir",category:"evaluation",field:"SOFTWARE RELIABILITY",description:"C++ structured-input fuzzing, deterministic crash reproduction, root-cause patching, and agent failure analysis.",tags:["C++","libFuzzer","Debugging"],status:"Approved task recorded",statusType:"approved"},
  {name:"Project Silver",category:"agents",field:"REPOSITORY TASKS",description:"Realistic repository workflows and engineering bug-fix candidates, including a locally tested utility-billing codebase.",tags:["Git","Python","Test design"],status:"Repository work",statusType:"general"},
  {name:"Project Kepler",category:"research",field:"FRONTIER BENCHMARKS",description:"Optimization and formal-mathematics task engineering with deterministic verification, adversarial probes, and quality-review revisions.",tags:["Optimization","Python","Grading"],status:"Mixed review outcomes",statusType:"general"},
  {name:"Project Starfish",subtitle:"Coding",category:"evaluation",field:"ENGINEERING COMPUTATION",description:"Scientific and electrical-engineering coding tasks with numerical models and independently reconstructed physical correctness checks.",tags:["Numerical methods","Python","Verifiers"],status:"66 accepted (reported)",statusType:"approved"}
];
const categoryLabels={software:"Software & agents",coding:"Coding evaluation",stem:"Math & STEM",language:"Language & multimodal",pending:"Reference only / pending"};
const history=[
  ["Project Odyssey","software"],["Project Pluto","software"],["Project Terminus — Edition 2","software"],
  ["Project Torch","software"],["Project Corgi","software"],["Project Dynamo","software"],
  ["Project Fenrir","software"],["Project Silver","software"],["Project Kepler / Frontier Bench","software"],
  ["Project Starfish — Coding","software"],["Rainforest SciCode Benchmark","software"],
  ["pydantic-assessment","software"],["GridOps Billing & Power Analysis Toolkit","software"],
  ["Project Blackhat","coding"],["Project Shield — Agentic Preference Ranking","coding"],
  ["Code Eval Project","coding"],["Code Human Preferences","coding"],["Mechanic Rainstorm","coding"],
  ["Code and Text Annotation for AI Model Improvement","coding"],["Hopper Coding RLHF","coding"],
  ["Plowman RLHF","coding"],["Sundial Coding Multimodal RLHF","coding"],
  ["Project Ceres","stem"],["Project Tabula","stem"],["Project Baby Carrot","stem"],["Mail Valley Reasoning","stem"],
  ["Green Wizards Math Reasoning","stem"],["Laurelin Moon Reasoning","stem"],["Beetle Crown","stem"],["Noir Gautr","stem"],
  ["Red Wizards Math Reasoning","stem"],["Purple Wizards Math Reasoning","stem"],["Blue Wizards","stem"],
  ["Laurelin Sun / Lorelin Sun","stem"],["Mathematics Benchmark Question Submission","stem"],
  ["Constellation SFT Math Singleturn","stem"],["Project Phoenix","stem"],["Project Rainier","stem"],
  ["Project Planck","stem"],["Project Riga / EK_Riga_Production","stem"],
  ["Cabbage Patch — Long Context Tasking","language"],["Ambassador Cafe / Assist Remove","language"],
  ["War Room","language"],["Omni Hindi","language"],["Community Alignment","language"],
  ["Mighty Moo — Vision Reasoning","language"],["Mindrift — Graphic Interpretation","language"],
  ["Project Canary — Reviewer Training","language"],["Project Hawkeye","language"],
  ["Dolphin Audio2Text English","language"],["Text Response Evaluation for AI Model Training","language"],
  ["Nexus Generation","pending"],["Cypher RLHF","pending"],["Gator’s Wife","pending"],
  ["Nexus Guardian","pending"],["Hedgehog","pending"],["Sculptor","pending"],
  ["Project Hippo Volt / VOLT","pending"],["Project Peridot67","pending"],
  ["Dolphin SRT","pending"],["Valkyrie","pending"]
];
const slugByProject={"Project Odyssey":"odyssey","Project Pluto":"pluto","Project Terminus":"terminus","Project Torch":"torch","Project Corgi":"corgi","Project Dynamo":"dynamo","Project Fenrir":"fenrir","Project Silver":"silver","Project Kepler":"kepler","Project Starfish":"starfish"};
const projectGrid=document.getElementById("project-grid");
const filterButtons=[...document.querySelectorAll("[data-filter]")];
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function renderProjects(filter="all") {
  const shown=selected.filter(p=>filter==="all"||p.category===filter);
  projectGrid.innerHTML=shown.map((p,i)=> {
    const subtitle=p.subtitle?'<span> / '+escapeHtml(p.subtitle)+'</span>':"";
    return '<a class="project-card" href="/projects/'+slugByProject[p.name]+'.html" aria-label="Read details about '+escapeHtml(p.name)+'">'+
      '<div class="project-meta"><span>'+escapeHtml(p.field)+'</span><span class="project-number">'+String(i+1).padStart(2,"0")+' / '+String(shown.length).padStart(2,"0")+'</span></div>'+
      '<h3 class="project-title">'+escapeHtml(p.name)+subtitle+'</h3>'+
      '<p class="project-description">'+escapeHtml(p.description)+'</p>'+
      '<div class="project-bottom"><div class="project-tags">'+p.tags.map(t=>'<span>'+escapeHtml(t)+'</span>').join("")+'</div>'+
      '<span class="project-status '+(p.statusType==="approved"?"approved":"")+'">'+escapeHtml(p.status)+'</span></div><span class="open-project">Explore project ↗</span></a>';
  }).join("");
}
renderProjects();
for(const b of filterButtons) b.addEventListener("click",()=>{
  for(const btn of filterButtons){const active=btn===b;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));}
  renderProjects(b.dataset.filter);
});

const list=document.getElementById("archive-list");
const search=document.getElementById("archive-search");
const category=document.getElementById("archive-category");
const count=document.getElementById("archive-count");
function renderArchive(){
  const term=search.value.trim().toLocaleLowerCase();
  const cat=category.value;
  const matches=history.filter(([name,c])=>(cat==="all"||cat===c)&&name.toLocaleLowerCase().includes(term));
  count.textContent=matches.length+" / "+history.length+" entries";
  list.innerHTML=matches.length?matches.map(([name,c])=>{
    const project=selected.find(p=>name===p.name || name.startsWith(p.name+" —") || name.startsWith(p.name+" /"));
    const href=project?'/projects/'+slugByProject[project.name]+'.html':null;
    const open=href?'<a class="archive-entry" href="'+href+'">':'<div class="archive-entry">';
    const close=href?'</a>':'</div>';
    return open+'<div><strong>'+escapeHtml(name)+'</strong><span>'+escapeHtml(categoryLabels[c])+(href?' · View details ↗':'')+'</span></div><span class="entry-dot '+(c==="pending"?"pending":"")+'" aria-hidden="true"></span>'+close;
  }).join(""):'<p class="empty-state">No projects match that search. Try a broader term or another category.</p>';
}
search.addEventListener("input",renderArchive);
category.addEventListener("change",renderArchive);
renderArchive();

const candidateName=document.getElementById("runner-name");
const results=document.getElementById("lab-results");
const score=document.getElementById("lab-score");
function renderSuite(candidate){
  const run=runSuite(candidate);
  candidateName.textContent=candidate;
  score.textContent=run.passed+" / "+run.total+" PASSED · "+Math.round(run.reward*100)+"%";
  results.innerHTML=run.results.map(t=>
    '<div class="lab-result"><span class="'+(t.passed?"pass":"fail")+'">'+(t.passed?"PASS":"FAIL")+'</span>'+
    '<span class="test-name">'+escapeHtml(t.name)+'</span><span class="test-time">DETERMINISTIC</span></div>'
  ).join("");
}
for(const mode of ["starter","partial","reference"]){
  document.getElementById("run-"+mode).addEventListener("click",()=>renderSuite(mode));
}

const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
toggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded",String(open));
  toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");
}));
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&nav.classList.contains("open")){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.focus();}
});
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  },{threshold:.08});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
} else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
document.getElementById("year").textContent=String(new Date().getFullYear());
