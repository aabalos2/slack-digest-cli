import { fetchJson } from "./fetchJson";
import { isJoke } from "./joke";
import { formatSlackMessage } from "./formatter";

const JOKE_API_URL = "https://official-joke-api.appspot.com/random_joke";

async function main(): Promise<void> {
  try {
    const joke = await fetchJson(JOKE_API_URL, isJoke);
    console.log(formatSlackMessage(joke));
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`Failed to fetch joke: ${message}`);
    process.exitCode = 1;
  }
}

main();
