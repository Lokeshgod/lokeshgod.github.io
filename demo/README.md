# Replay-invariant verifier — public demonstration

An original educational micro-benchmark for this portfolio. It is **not** a copy of a client submission, private grader, or paid task.

## Contract

Each event has a nonempty stream name, positive integer sequence, and finite numeric delta. Each stream begins at sequence 1; subsequent new events must be consecutive. Exact replays are idempotent, conflicting replays and sequence gaps are errors, malformed events are rejected, and accepted deltas are added once per stream.

## Candidates

- **Starter:** an unimplemented function returning an empty object.
- **Partial:** validates input and sums deltas, but mishandles duplicate delivery and ordering.
- **Reference:** maintains per-stream sequence and replay history.

Seven deterministic scenarios test these properties. Scores are calculated by the test runner.

## Run it

Use Node.js with no third-party dependencies:

    node demo/run.mjs
    node --test demo/test.mjs

The [website](https://lokeshgod.github.io/#lab) executes the same evaluator in the browser.

This demonstrator is deliberately small; it is not evidence of frontier-model performance or difficulty. No proprietary client assets are included.
