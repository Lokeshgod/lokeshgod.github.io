export const projects = {
  "odyssey": {
    name:"Project Odyssey", category:"Long-horizon software engineering", company:"Benchmark engineering program",
    subtitle:"Stateful systems that stay correct through revisions, concurrency, and crashes.",
    intro:"Long-horizon software-agent evaluations covering real-world interactions between business logic, persistence, exactly-once semantics, and recovery. A correct patch must preserve a system contract across multiple modules and sequences of operations—not just satisfy an isolated example.",
    focus:["Revision-aware event-time interval joins and differential output","Exactly-once producer sequencing and payload-sensitive replay","Partition watermarks, late-event handling, and safe compaction","Checksum-protected snapshots, durable restart recovery, and concurrency","Deterministic public APIs and indexed mixed workloads"],
    examples:[
      {title:"Differential Temporal Join Recovery",type:"Revised benchmark candidate",detail:"A stream-processing runtime required exact retractions and additions when inputs changed, persistent revision fences after compaction, recoverable acknowledged state, and deterministic polling.",evidence:"Local V2 verification: 49 sealed cases across 12 test families; reference normalized reward 1.0 and untouched starter 0.0.",status:"Local verification, not final hosted approval"},
      {title:"Long-horizon difficulty feedback",type:"Evaluation lesson",detail:"An earlier submission passed several structural checks but failed the hosted long-horizon requirement. The revision expanded genuinely interacting subsystems rather than padding execution time.",evidence:"Hosted long-horizon rejection is recorded for an earlier version; subsequent hosted acceptance is not established.",status:"Recorded review result"}
    ],
    grader:["Separate correctness cases by state transitions, recovery, concurrency, and performance","Test cross-feature sequences in addition to individual capabilities","Normalize graded partial credit against a nonblank starter baseline","Use unseen identities, partition moves, corrupt snapshots, and process restarts to reject shortcuts"],
    stack:["Python","Linux","pytest-style verifiers","Checksums","Concurrency","JSON-lines CLI"],
    evidence:"A locally documented 49-case reference pass is not evidence of hosted acceptance or actual model solve-rate.",
    outcome:"Verified local reference; hosted acceptance not established.",
    metric:"49 / 49",metricCaption:"Local sealed reference cases"
  },
  "pluto":{
    name:"Project Pluto",category:"Terminal-based coding agents",company:"AfterQuery",
    subtitle:"Development tasks that measure an agent doing real work in a terminal.",
    intro:"Terminal-Bench-style evaluations aimed at frontier AI agents operating in Linux developer environments. The work centers on a self-contained task contract, realistic workflows, a runnable reference, and programmatic scoring.",
    focus:["Terminal-driven inspection, implementation, debugging, and testing","Repeatable Linux environments and bounded task scope","Clear success criteria grounded in observable behavior","Failing starter vs passing reference testing","Prevention of hardcoded-output and environment-leakage shortcuts"],
    examples:[
      {title:"Terminal-agent task preparation",type:"Benchmark workflow",detail:"Package an engineering problem with an agent-facing specification, prepared environment, reference implementation, and verifier that can distinguish partial fixes from a full solution.",evidence:"Historical project instructions and tasking records were recovered.",status:"Program participation/workflow documented"},
      {title:"Baseline/reference calibration",type:"Quality methodology",detail:"Check that an untouched environment fails the target contract and that a known correct reference satisfies it. Keep hidden evaluator details separate from the agent-facing instructions.",evidence:"Project guidance and prior task-development discussions; specific accepted-task count has not been independently reconciled.",status:"Methodology evidence"}
    ],
    grader:["Test actual execution rather than existence of files or string matching","Fix toolchain versions and eliminate unnecessary external services","Exercise edge cases and regressions","Keep solution and grader source out of the editable agent environment"],
    stack:["Linux","Shell","Python","Docker task configurations","Terminal-Bench style environments"],
    evidence:"No published task-by-task acceptance ledger has been reviewed for the full reported Pluto count.",
    outcome:"Task-development work documented; acceptance total awaiting reconciliation.",
    metric:"TERMINAL",metricCaption:"Agent-focused tasks"
  },
  "terminus":{
    name:"Project Terminus — Edition 2",category:"Systems engineering for AI agents",company:"Snorkel AI benchmark ecosystem",
    subtitle:"Multi-package Go repair work with safety, consistency, and idempotency constraints.",
    intro:"A system administration coding-agent benchmark around reconciling desired policy into an alternate-root systemd filesystem. Correctness required preserving ownership and file transitions through repeated operations.",
    focus:["Layered host/role policy resolution and deletion semantics","Template unit instances and symlink correctness","Unmanaged-path conflict detection and safe adoption","Atomic updates, stale artifact cleanup, and stable second-run behavior","Deterministic, read-only planning and error-before-mutation validation"],
    examples:[
      {title:"unitfleet-reconcile",type:"Locally verified Go benchmark",detail:"Repair a tool that plans and applies layered host policy as managed systemd artifacts, handling precedence, state transitions, and safe interaction with unmanaged paths.",evidence:"The recorded reference passes visible Go tests and nine external verifier checks.",status:"Local verification"},
      {title:"Hermeticity and evaluation limits",type:"Engineering audit",detail:"The task bundle underwent static packaging checks, but the workspace lacked the relevant Docker/Harbor execution environment and did not run hosted agent difficulty probes.",evidence:"Task author notes explicitly document these limitations.",status:"No hosted acceptance claim"}
    ],
    grader:["Check second-run no-op behavior including stable modification times","Refuse conflicting unmanaged files before mutation","Verify cleanup on enable/mask transitions","Test exact symlink targets and ownership across multiple scenarios"],
    stack:["Go","systemd","Filesystem APIs","pytest","Linux","Task packaging"],
    evidence:"Nine external verifier tests passed locally; that does not establish a platform verdict.",
    outcome:"Reference locally validated; hosted evaluation unconfirmed.",
    metric:"9 / 9",metricCaption:"Local external verifier checks"
  },
  "torch":{
    name:"Project Torch",category:"Machine-learning framework evaluation",company:"AfterQuery",
    subtitle:"Testing subtle JAX behavior across transformations, state, and derivatives.",
    intro:"ML framework repair benchmarks investigating interactions between functional state, PyTrees, tracing, custom differentiation, and regression behavior. Tasks emphasize observable semantics rather than prescribing a patch.",
    focus:["JAX tracing and transformations","Batched routing and functional state","Automatic differentiation and custom derivative behavior","Regression protection across alternative implementations","Deterministic reward calibration and tamper-resistant verifier parsing"],
    examples:[
      {title:"Checkified Batched Routing",type:"Locally validated task",detail:"A routing repair task with interdependent validity, batch, and stream behaviors. Partial fixes were calibrated to receive intermediate—not full—credit.",evidence:"17/17 local reference tests; three baseline runs scored 0 and three oracle runs scored 1.",status:"Local verification"},
      {title:"Routed Adapter Primitive",type:"Locally validated task",detail:"A JAX transformation and custom-derivative task with a larger suite separating new repair checks from existing regression behavior.",evidence:"32/32 local reference tests; repeated NOP 0 and Oracle 1 in the recorded report.",status:"Local verification"}
    ],
    grader:["Design fail-to-pass and pass-to-pass cases","Verify JAX semantic correctness under transformations","Test partial fixes to ensure reward reflects actual progress","Protect test parsing against forged reports and shortcut behavior"],
    stack:["Python","JAX","PyTrees","Autodiff","pytest","Shell verifiers"],
    evidence:"Native CPU JAX execution was recorded. Docker/Harbor was unavailable for some local validation reports. Do not infer hosted approval.",
    outcome:"Multiple task candidates locally validated; hosted acceptance not independently established.",
    metric:"32 / 32",metricCaption:"One documented local reference suite"
  },
  "corgi":{
    name:"Project Corgi",category:"Advanced repository engineering",company:"AfterQuery",
    subtitle:"Complex implementation tasks inside real compiler and symbolic-computing surfaces.",
    intro:"Long-horizon coding-agent benchmark work focused on substantive multi-file changes and conformance behavior in large runtimes rather than shallow single-function repairs.",
    focus:["Compiler/runtime semantics and extension behavior","Symbolic rewrite systems and independent simplification checks","Versioned graph transaction semantics","Large sealed test matrices and weighted scoring families","Partial-credit testing and resistance to trivial benchmark shortcuts"],
    examples:[
      {title:"Cython Native Execution Model",type:"Locally checked benchmark candidate",detail:"A compiler/runtime-scale implementation spanning parallel nogil lowering, native collection conversions, dispatch behavior, and execution variants.",evidence:"Validation report records 251 sealed cases over 28 weighted families; reference patch spans 23 files. Live-agent pass-rate not established.",status:"Local validation"},
      {title:"SymPy E-Graph Rewrite Runtime",type:"Locally checked benchmark candidate",detail:"Implementation and verification of symbolic rewrite semantics against a sealed behavioral matrix, with calibration against incomplete solutions.",evidence:"Archive revalidation records 210/210 reference cases; Docker and hosted similarity/difficulty gates were not run in the recorded workspace.",status:"Local validation"},
      {title:"Versioned Transactional Graph Runtime",type:"Locally audited candidate",detail:"Versioned graph operations with transactions, savepoints, branch merge, journal, snapshots, compaction, and consistency checks.",evidence:"A 61-case static/verification report was found; full container build was not run locally.",status:"Static/local audit"}
    ],
    grader:["Separate weighted capability families","Run a true reference implementation against sealed cases","Check branch merges, snapshots, and transaction invariants","Reject protected-source modification and other adversarial shortcuts"],
    stack:["Cython","Python","SymPy","NetworkX","Multi-file patching","Sealed tests"],
    evidence:"User reports nine Corgi tasks. Per-task hosted acceptance is not independently established; specific named examples above have documented local validation.",
    outcome:"9 tasks reported by author; local verification documented for named examples.",
    metric:"9",metricCaption:"Tasks reported by author"
  },
  "dynamo":{
    name:"Project Dynamo",category:"Benchmark verifier engineering",company:"AfterQuery",
    subtitle:"Making coding benchmarks more discriminating, reproducible, and harder to game.",
    intro:"Repair and refinement work focused on agent-facing specifications, executable harnesses, graders, reference runs, reproducibility, and rejection of incomplete implementation shortcuts.",
    focus:["Benchmark/task packaging review","Fail-to-pass vs pass-to-pass regression correctness","Reference-versus-starter reward calibration","Cross-runtime and restart behavior","Verifier integrity and anti-hardcoding probes"],
    examples:[
      {title:"Repair-focused evaluator workflows",type:"Benchmark quality work",detail:"Analyze how a seemingly successful patch can pass visible checks while violating the intended behavior, then strengthen the evaluator around general properties and regressions.",evidence:"Historical engineering workflow records support benchmark repair and validation work; exact approved-task totals are not established.",status:"Recorded methodology"}
    ],
    grader:["Ensure all required inputs and outputs are public in the task specification","Compare against independent calculation where practicable","Keep scoring deterministic and interpretable","Ensure tests cannot be passed by editing a report or verifier"],
    stack:["Python","Bash","pytest","Reproducible tasks","Automated grading"],
    evidence:"No independently verified consolidated acceptance ledger is currently linked here.",
    outcome:"Benchmark engineering and revision work documented.",
    metric:"VERIFY",metricCaption:"Evaluation integrity"
  },
  "fenrir":{
    name:"Project Fenrir",category:"Fuzzing and software reliability",company:"AfterQuery",
    subtitle:"A real failure path, a reproducible crash, and root-cause repair.",
    intro:"C++ agent-evaluation work centered on structurally valid fuzzing inputs, actual project-code failures, and patches that preserve functionality rather than merely suppress the crash.",
    focus:["LibFuzzer harnesses reaching real project logic","Structured binary protocol processing and decoder state","Sanitizer/allocator evidence and deterministic proof-of-crash","Separation between PoC, initial repository, and repair","Root-cause fixes with regression and fuzzing checks"],
    examples:[
      {title:"VaultWire windowed decoder OOM",type:"Approved benchmark",detail:"A crafted block header carried an oversized window length through several decoding functions into the RingWindow vector allocation, provoking a multi-gigabyte request in a fuzzing run.",evidence:"Approved/paid task recorded; a historical model run solved the full challenge 1 time in 10 under the earlier evaluation setup.",status:"Accepted submission"},
      {title:"Evaluator-resistant bug triage",type:"Verification methodology",detail:"Differentiate a genuine decoder bug from a harness-only crash, and reject fixes that silence sanitizers or special-case the proof input.",evidence:"Approved baseline records the bug path, root function, and patching constraints.",status:"Recorded engineering method"}
    ],
    grader:["Reproduce the same failure on a clean build","Check the crash originates inside meaningful project code","Require PoC to stop crashing after an actual patch","Exercise other inputs and forbid disabling the harness"],
    stack:["C++","libFuzzer","Sanitizers","LLVM toolchain","Git","CI"],
    evidence:"At least one individually documented accepted C++ benchmark; broader counts are not independently verified here.",
    outcome:"Approved C++ fuzzing task with documented model difficulty evidence.",
    metric:"APPROVED",metricCaption:"Individually documented submission"
  },
  "silver":{
    name:"Project Silver",category:"Repository-based agent evaluation",company:"AfterQuery",
    subtitle:"Version-controlled engineering work shaped into realistic code-change tasks.",
    intro:"Software benchmark development using real repository states, reproducible base/fix pairs, and domain-specific functional defects that require an agent to understand the whole call chain.",
    focus:["Creating coherent repositories with meaningful history","Candidate base/fix commit selection","Outcome-focused bug reports rather than code-location hints","Regression checks on technical and numerical invariants","Clean repository submission and task evaluation planning"],
    examples:[
      {title:"GridOps Meter Billing Toolkit",type:"Prepared repository",detail:"Python utility billing and reconciliation code covering transformer-ratio validation, feeder-loss denominators, spike handling with estimated readings, and reconciliation of unassigned meters.",evidence:"Preparation notes record 21 commits and 25 passing local tests.",status:"Repository preparation"},
      {title:"pydantic-assessment",type:"Repository-level assessment",detail:"A multi-file computed-field serialization change concerned with exclusion behavior through the schema-generation pipeline.",evidence:"Reference patch and test specification found; external acceptance not established.",status:"Assessment/reference work"}
    ],
    grader:["Use a broken base commit and a known working fix commit","Include tests that fail before the repair and pass after","Check domain-specific correctness rather than superficial code style","Keep commit history and scripts repeatable"],
    stack:["Python","Git","pytest","Repository history","Schemas","Data processing"],
    evidence:"The cited GridOps test count is a repository-local result, not a hosted accepted-task count.",
    outcome:"Prepared and locally tested repository work recorded.",
    metric:"25 / 25",metricCaption:"GridOps local test suite"
  },
  "kepler":{
    name:"Project Kepler",category:"Formal mathematics and optimization benchmarks",company:"AfterQuery",
    subtitle:"Deterministic verification for mathematical and optimization-heavy agent tasks.",
    intro:"Benchmark work in optimization and formal mathematical reasoning, where a correct solution must satisfy a rigorous contract and resist easy shortcuts or hardcoded instances.",
    focus:["Operations research and constrained optimization","Algebraic/structural mathematics, proof-style validation","Exact reference calculations and independent verifier checks","Oracle/NOP calibration and reproducible task packaging","Adversarial, similarity, clarity, and quality reviews"],
    examples:[
      {title:"Coupled Lifting Series",type:"Revised mathematical candidate",detail:"A formal-mathematics task was revised to improve instruction clarity and mathematical depth beyond a fixed numerical instance.",evidence:"A local mathematical verification report is recorded; full hosted gates for the latest revision remain unverified.",status:"Local revision"},
      {title:"Recourse Regret Audit",type:"Quality-review case study",detail:"A benchmark passed earlier structural-type gates and local reference checking but failed quality review, including report-path and genuine difficulty issues.",evidence:"Recorded quality rejection; no approval claim is made.",status:"Rejected/revised task"}
    ],
    grader:["Verify exact identities and optimization certificates","Run untouched and reference paths separately","Investigate shortcut routes and partial solutions","Require clear domain significance instead of artificial difficulty"],
    stack:["Python","Mathematical optimization","SymPy","Test harnesses","Deterministic scoring"],
    evidence:"Multiple task prototypes and review failures are recorded. Acceptance across all Kepler candidates has not been independently verified.",
    outcome:"Local task work and documented quality-review revisions.",
    metric:"ORACLE",metricCaption:"Reference-verification methodology"
  },
  "starfish":{
    name:"Project Starfish — Coding",category:"Scientific and engineering coding benchmarks",company:"Snorkel AI",
    subtitle:"From raw observations to verifiable, physically consistent decisions.",
    intro:"Scientific coding-agent evaluations across electrical-engineering diagnostics, measurements, calibration, numerical fitting, and robust system design. Tasks require connected reasoning and generate auditable files rather than a single answer.",
    focus:["Physical calibration and noise/transient rejection","Current/voltage signal analysis and numerical reconstruction","Robust optimization under multiple degradation scenarios","Independent reconstruction of physics from source data","Cross-file schema, identity, residual, and numerical consistency checks"],
    examples:[
      {title:"Seasonal Substation Grounding-Grid Remediation",type:"Historically accepted coding task",detail:"A candidate design was evaluated against nodal grounding calculations, spatial touch/step exposure, branch thermal energy, and 45 degradation/scenario combinations.",evidence:"Part of four individually described reviewer-accepted paid tasks in the recovered comparative audit.",status:"Accepted task in historical audit"},
      {title:"PV String Health Reconstruction",type:"Historically accepted coding task",detail:"Reconciled calibrated I–V observations, transient handling, physical model fitting, and cross-condition diagnosis.",evidence:"Included in four accepted submissions described by the historical audit.",status:"Accepted task in historical audit"},
      {title:"Transformer FRA Resonance Reconstruction",type:"Historically accepted coding task",detail:"Used calibrated complex transfer measurements, resonance fitting, and condition assessment.",evidence:"Included in four accepted submissions described by the historical audit.",status:"Accepted task in historical audit"},
      {title:"Motor Current Signature Reconstruction",type:"Historically accepted coding task",detail:"Combined multiphase current and vibration measurements, slip/sideband reasoning, and fault diagnosis.",evidence:"Included in four accepted submissions described by the historical audit.",status:"Accepted task in historical audit"}
    ],
    grader:["Independently recompute physical quantities and constraints","Verify exact coverage of scenarios and input records","Reject results that copy a plausible expected-output table","Test infeasible and holdout behavior and check diagnostic handoffs"],
    stack:["Python","Numerical analysis","Electrical engineering","Independent verifiers","Robust optimization"],
    evidence:"User reports 66 accepted Starfish tasks. A recovered audit describes four accepted tasks in detail; it is a subset, not a total count.",
    outcome:"66 accepted tasks reported by author; four individually documented in recovered audit.",
    metric:"66",metricCaption:"Accepted tasks reported by author"
  }
};