import { reactive } from "vue";

export default function getDadJokes() {
  const joke = reactive({
    id: -1,
    text: ""
  });

  async function fetchJoke() {
    const result = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json"
      }
    });

    const json = await result.json();

    joke.text = json.joke;
    joke.id = json.id;
  }

  return {
    joke,
    fetchJoke
  };
}
