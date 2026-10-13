import {projects} from "/project-data.js";
const slug=document.body.dataset.project;
const project=projects[slug];
const mount=document.getElementById("project-detail");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
if(!project){mount.innerHTML='<div class="shell"><h1>Project not found</h1><a href="/#work">Return to selected work</a></div>';}else{
document.title=project.name+" | Lokesh Matta — AI Benchmark Engineering";
const counts={"odyssey":"03","pluto":"02","terminus":"04","torch":"05","corgi":"06","dynamo":"07","fenrir":"08","silver":"09","kepler":"10","starfish":"01"};
const examples=project.examples.map((e,i)=>`
<article class="detail-example">
  <div class="detail-example-top"><span>CASE ${String(i+1).padStart(2,"0")}</span><span>${esc(e.type)}</span></div>
  <h3>${esc(e.title)}</h3>
  <p>${esc(e.detail)}</p>
  <div class="evidence-block"><span>EVIDENCE</span><p>${esc(e.evidence)}</p><small>${esc(e.status)}</small></div>
</article>`).join("");
const all=Object.entries(projects);
const idx=all.findIndex(([key])=>key===slug);
const prev=all[(idx-1+all.length)%all.length];
const next=all[(idx+1)%all.length];
mount.innerHTML=`
<section class="detail-hero shell">
  <a class="back-link" href="/#work">← All featured projects</a>
  <div class="detail-kicker">PROJECT PROFILE <span> / </span> ${esc(project.category)}</div>
  <h1>${esc(project.name)}</h1>
  <p class="detail-subtitle">${esc(project.subtitle)}</p>
  <div class="detail-meta"><span>PROGRAM / ${esc(project.company)}</span><span>RESEARCH AREA / ${esc(project.category)}</span></div>
</section>
<section class="detail-overview shell">
  <div class="detail-intro">
    <div><span class="section-kicker"><span class="kicker-line"></span> 01 / OVERVIEW</span><h2>Engineering the<br><em>evaluation.</em></h2></div>
    <div><p>${esc(project.intro)}</p><div class="detail-tags">${project.stack.map(t=>'<span>'+esc(t)+'</span>').join("")}</div></div>
  </div>
  <div class="detail-metric"><strong>${esc(project.metric)}</strong><div><span>${esc(project.metricCaption)}</span><p>${esc(project.outcome)}</p></div></div>
</section>
<section class="detail-section shell"><div class="detail-section-head"><span class="section-kicker"><span class="kicker-line"></span> 02 / PROBLEM SPACE</span><h2>Technical focus</h2></div>
  <div class="detail-points">${project.focus.map((p,i)=>'<div class="detail-point"><span>'+String(i+1).padStart(2,"0")+'</span><p>'+esc(p)+'</p></div>').join("")}</div>
</section>
<section class="detail-section detail-examples-wrap"><div class="shell">
  <div class="detail-section-head"><span class="section-kicker"><span class="kicker-line"></span> 03 / REPRESENTATIVE WORK</span><h2>Tasks &amp; engineering notes</h2><p>Summaries only: original client archives, datasets, prompts and private tests are not published.</p></div>
  <div class="detail-examples">${examples}</div>
</div></section>
<section class="detail-section shell"><div class="detail-section-head"><span class="section-kicker"><span class="kicker-line"></span> 04 / VERIFIER DESIGN</span><h2>How correctness was assessed</h2></div>
  <div class="detail-verifiers">${project.grader.map((g,i)=>'<div><b>'+String(i+1).padStart(2,"0")+'</b><p>'+esc(g)+'</p></div>').join("")}</div>
</section>
<section class="detail-section shell detail-integrity">
  <div><span class="section-kicker"><span class="kicker-line"></span> 05 / EVIDENCE &amp; LIMITATIONS</span><h2>Verified vs. reported</h2></div>
  <p>${esc(project.evidence)}</p>
  <p>Some project totals were provided directly by the portfolio owner and have not yet been reconciled against individual platform acceptance records. A passing reference or local verifier does not itself establish external acceptance. AI-assisted tools supported parts of project development; the examples here are public-safe summaries only.</p>
</section>
<section class="detail-nav shell">
  <a href="/projects/${esc(prev[0])}.html"><span>← PREVIOUS PROJECT</span><strong>${esc(prev[1].name)}</strong></a>
  <a href="/projects/${esc(next[0])}.html"><span>NEXT PROJECT →</span><strong>${esc(next[1].name)}</strong></a>
</section>`;
}