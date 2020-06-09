import { reactive } from "vue";

export default function useFavorites() {
  const favorites = reactive({
    list: []
  });

  // The joke here is shallow copied so we lose the reference
  // and it is no longer a reactive object
  const addJokeToFavorites = joke => favorites.list.push({ ...joke });

  const removeJokeFromFavorites = joke =>
    (favorites.list = favorites.list.filter(item => joke.id != item.id));

  return {
    favorites,
    addJokeToFavorites,
    removeJokeFromFavorites
  };
}
