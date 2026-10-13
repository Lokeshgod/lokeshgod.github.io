# Lokesh Matta — AI Benchmark Engineering

[![Portfolio](https://img.shields.io/badge/portfolio-live-b9f2c5?style=flat-square&labelColor=0b1116)](https://lokeshgod.github.io/)
[![Verify site and demo](https://github.com/Lokeshgod/lokeshgod.github.io/actions/workflows/verify.yml/badge.svg)](https://github.com/Lokeshgod/lokeshgod.github.io/actions/workflows/verify.yml)

A public, static technical portfolio for **Kumar Srivijaya Lokesh Matta**, focused on realistic software-engineering benchmarks, long-horizon AI coding-agent evaluation, automated grading, and software reliability.

**Website:** https://lokeshgod.github.io/

## Contents

- **Selected work:** Ten software-agent and benchmark programs.
- **Engineering notes:** Three high-level case studies explaining the technical evaluation approach and evidence status.
- **Methodology:** Specifications, references, independent graders, adversarial validation, and honest calibration.
- **Interactive lab:** An original, public replay-invariant grading example with three executable implementations and seven deterministic scenarios.
- **Project index:** A searchable historical list of 61 project names, technical workstreams, aliases, and references, clearly distinguishing entries whose participation or details remain unconfirmed.

## Local development

No web framework or external runtime dependencies are necessary. Open the site through an HTTP static server (ES modules do not load correctly via `file://` in many browsers):

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

To verify the public grader:

```bash
node demo/run.mjs
npm test
npm run check
```

GitHub Actions runs the tests on pushes and pull requests.

## Evidence and disclosure

The site is a professional overview rather than a distribution channel for client benchmarks. Claims of approval and local test success are deliberately distinguished. The public interactive demo is original educational code, not a copy of a paid submission. No private client datasets, solution archives, platform grader internals, or proprietary artifacts are published here.

AI-assisted tools supported portions of the original benchmark development and some website implementation. All published claims should be read in the context of their stated evidence and verification limits.

## Contact

lokesh5649p@gmail.com
