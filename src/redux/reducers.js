import { LIKE_GIF, UNLIKE_GIF } from "./action";

export const likedGifs = (state = [], action) => {
  switch (action.type) {
    case LIKE_GIF:
      const result = state.filter(gif => gif.id !== action.url).length > 0;

      if (result) {
        return state;
      } else {
        state.push({ [action.id]: action.url });
        return state;
      }
    case UNLIKE_GIF:
      return state.filter(gif => gif.id === action.url);

    default:
      return state;
  }
};
