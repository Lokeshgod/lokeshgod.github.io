/**
 * Replay-invariant micro-benchmark.
 *
 * An ORIGINAL, PUBLIC educational demonstration — not a client submission.
 * A correct implementation must apply per-stream sequential deltas exactly once,
 * accept identical replays, and reject malformed or conflicting event histories.
 * No dependencies, network requests, or hidden data.
 */

function validate(event) {
  if (!event || typeof event !== "object" ||
      typeof event.stream !== "string" || !event.stream ||
      !Number.isSafeInteger(event.sequence) || event.sequence < 1 ||
      typeof event.delta !== "number" || !Number.isFinite(event.delta)) {
    throw new TypeError("Invalid event");
  }
}

/** Unimplemented starter, to illustrate a genuine zero baseline. */
export function starter() {
  return {};
}

/** Plausible, incomplete solution: does not enforce replay or sequence safety. */
export function partial(events) {
  const totals = {};
  for (const event of events) {
    validate(event);
    totals[event.stream] = (totals[event.stream] ?? 0) + event.delta;
  }
  return totals;
}

/** Complete reference for the explicitly scoped public demo contract. */
export function reference(events) {
  const streams = new Map();
  for (const event of events) {
    validate(event);
    if (!streams.has(event.stream)) {
      streams.set(event.stream, {last: 0, total: 0, seen: new Map()});
    }
    const stream = streams.get(event.stream);
    if (stream.seen.has(event.sequence)) {
      if (stream.seen.get(event.sequence) !== event.delta) {
        throw new Error("Conflicting replay");
      }
      continue;
    }
    if (event.sequence !== stream.last + 1) {
      throw new Error("Out-of-order sequence");
    }
    stream.seen.set(event.sequence, event.delta);
    stream.last = event.sequence;
    stream.total += event.delta;
  }
  return Object.fromEntries([...streams].map(([id, state]) => [id, state.total]));
}
const e = (stream, sequence, delta) => ({stream, sequence, delta});

/** Fully public deterministic cases (not representative of proprietary evaluations). */
export const scenarios = Object.freeze([
  {name:"Ordered events", events:[e("alpha",1,5),e("alpha",2,-2)], expected:{alpha:3}},
  {name:"Duplicate delivery", events:[e("alpha",1,5),e("alpha",1,5)], expected:{alpha:5}},
  {name:"Independent streams", events:[e("alpha",1,2),e("beta",1,4)], expected:{alpha:2,beta:4}},
  {name:"Historical replay", events:[e("alpha",1,2),e("alpha",2,3),e("alpha",1,2)], expected:{alpha:5}},
  {name:"Conflicting replay", events:[e("alpha",1,2),e("alpha",1,7)], shouldThrow:true},
  {name:"Sequence gap", events:[e("alpha",1,5),e("alpha",3,2)], shouldThrow:true},
  {name:"Invalid delta", events:[e("alpha",1,"5")], shouldThrow:true}
]);
export const implementations = Object.freeze({starter,partial,reference});

function equalObject(a,b) {
  if (!a || typeof a !== "object" || Array.isArray(a)) return false;
  const ak = Object.keys(a).sort(), bk = Object.keys(b).sort();
  if (JSON.stringify(ak) !== JSON.stringify(bk)) return false;
  return ak.every(k => Object.is(a[k],b[k]));
}

export function runSuite(candidate) {
  const fn = implementations[candidate];
  if (!fn) throw new RangeError("Unknown candidate");
  const results = scenarios.map(test => {
    let passed = false;
    try {
      const actual = fn(test.events.map(event => ({...event})));
      passed = !test.shouldThrow && equalObject(actual, test.expected);
    } catch {
      passed = Boolean(test.shouldThrow);
    }
    return {name:test.name, passed};
  });
  const passed = results.filter(x=>x.passed).length;
  return {candidate, passed, total:results.length, reward:passed/results.length, results};
}