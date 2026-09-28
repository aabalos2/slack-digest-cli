import { Joke } from "./joke";

// Turns a typed Joke into a Slack-style message string. Framed this way as
// a nod to the actual "Workday Everywhere" team this project is prep for
// (they build integrations into Slack/Teams) -- not a claim of real Slack
// API experience, just a natural shape for the demo.
export function formatSlackMessage(joke: Joke): string {
  return `*Joke of the moment* :speech_balloon:\n>${joke.setup}\n>_${joke.punchline}_`;
}
