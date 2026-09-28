# slack-digest-cli

A small TypeScript CLI that fetches a random joke from a public API and formats it as a Slack-style message.

## Why this exists

Built to sharpen TypeScript fundamentals ahead of an interview for a role on a team that builds integrations into Slack/Teams. My professional TypeScript experience is mostly through Angular; this is a small, framework-free project focused purely on TypeScript-the-language: generics, `unknown` vs `any`, and type predicates.

The Slack-message framing is just a natural shape for the demo -- not a claim of real Slack API experience.

## What it demonstrates

- **`fetchJson<T>()`** ([src/fetchJson.ts](src/fetchJson.ts)) -- a generic helper that works for any response shape, instead of writing a near-identical fetch function per API.
- **`unknown` handled safely** -- the raw API response is typed as `unknown`, not `any`, and must pass a type predicate (`isJoke`) before it's trusted as a `Joke`.
- **A type predicate** ([src/joke.ts](src/joke.ts)) -- `isJoke(data): data is Joke` actually checks the shape at runtime, rather than just casting and hoping.

## Running it

```bash
npm install
npm start
```

## Known simplifications

- No automated tests -- validated manually against both a real success case and a real failure case (a non-JSON response) during development.
- Only one API/shape is modeled; a larger version would make `fetchJson` reusable across several typed endpoints.
