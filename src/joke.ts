// The shape we expect back from the Official Joke API. Declaring this as
// an `interface` (rather than just trusting `any`) is what lets TypeScript
// catch a typo like `joke.punchlien` at compile time instead of at runtime.
export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

// A type predicate (`data is Joke`) -- this is what makes `unknown` safe to
// use instead of just falling back to `any`. The caller can't touch the
// data as a `Joke` until it's actually been checked to look like one.
export function isJoke(data: unknown): data is Joke {
  if (typeof data !== "object" || data === null) return false;

  const candidate = data as Record<string, unknown>;
  return (
    typeof candidate.id === "number" &&
    typeof candidate.type === "string" &&
    typeof candidate.setup === "string" &&
    typeof candidate.punchline === "string"
  );
}
