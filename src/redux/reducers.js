import { LIKE_GIF, UNLIKE_GIF, START_OVER } from "./action";

export const likedGifs = (state = {}, action) => {
  switch (action.type) {
    case LIKE_GIF:
      if (action.id in state) {
        return state;
      } else {
        state[action.id] = {
          url: action.url,
          weirdnessValue: action.weirdnessValue,
          title: action.title,
          searchTerm: action.searchTerm
        };
        return state;
      }
    case UNLIKE_GIF:
      let newState = {};

      Object.keys(state)
        .filter(key => action.id !== key)
        .map(key => (newState[key] = state[key]));

      return newState;

    case START_OVER:
      return {};

    default:
      return state;
  }
};
