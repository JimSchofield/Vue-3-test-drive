<template>
  <div id="app">
    <h1>Dad Jokes</h1>
    <button @click="fetchJoke">Get a Dad Joke</button>
    <blockquote>
      {{ joke.text }}
    </blockquote>
    <button @click="addJokeToFavorites(joke)">Add joke to favorites</button>
    <ul class="grid">
      <li v-for="joke in favorites.list" :key="joke.id">
        {{ joke.text }}
        <button @click="removeJokeFromFavorites(joke)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";

import getDadJokes from "./compose/getJokes";
import useFavorites from "./compose/favorites";

export default {
  name: "App",
  setup() {
    const { joke, fetchJoke } = getDadJokes();

    onMounted(() => {
      fetchJoke();
    });

    return {
      joke,
      fetchJoke,
      ...useFavorites()
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

blockquote {
  font-size: 2em;
  background: rgba(10,20,30,.1);
  padding: 1em;
  border-radius: 8px;
}

.grid {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

.grid > * {
  list-style-type: none;
  border: 1px solid black;
  padding: .5em;
  border-radius: 8px;
}

.grid button {
  display: block;
  width: 100%;
  margin-top: .5em;
  font: inherit;
}
</style>
