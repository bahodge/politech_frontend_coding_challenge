import { LIKE_GIF, UNLIKE_GIF } from "./action";

export const likedGifs = (state = {}, action) => {
  switch (action.type) {
    case LIKE_GIF:
      if (action.id in state) {
        return state;
      } else {
        state[action.id] = action.url;
        return state;
      }
    case UNLIKE_GIF:
      // Object.assign({}, state)
      let newState = {};

      Object.keys(state)
        .filter(key => action.id !== key)
        .map(key => (newState[key] = state[key]));

      return newState;

    default:
      return state;
  }
};
