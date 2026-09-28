// Generic on purpose: this one function works for ANY response shape,
// instead of writing a separate near-identical fetch function per API.
// That's the actual argument for generics over `any` -- `any` would also
// "work" for every shape, but it throws away type information entirely,
// so callers get no compile-time safety at all.
export async function fetchJson<T>(
  url: string,
  validate: (data: unknown) => data is T
): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }

  // response.json() returns `any` in the DOM lib types -- immediately
  // widening it to `unknown` forces every caller to validate before use,
  // rather than quietly trusting whatever the network handed back.
  const data: unknown = await response.json();

  if (!validate(data)) {
    throw new Error(`Response from ${url} did not match the expected shape`);
  }

  return data;
}
