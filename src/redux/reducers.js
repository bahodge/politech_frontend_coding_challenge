import { LIKE_GIF, UNLIKE_GIF } from "./action";

export const likedGifs = (state = [], action) => {
  switch (action.type) {
    case LIKE_GIF:
      if (state.includes(action.imageUrl)) {
        return state;
      } else {
        state.push(action.imageUrl);
        return state;
      }
    case UNLIKE_GIF:
      return state.filter(url => url === action.imageUrl);

    default:
      return state;
  }
};
