import { store } from "./store";
import { likeGif, unlikeGif } from "./action";

const dispatchLikeGif = (id, url, weirdnessValue) =>
  store.dispatch(likeGif(id, url, weirdnessValue));
const dispatchUnlikeGif = id => store.dispatch(unlikeGif(id));

export { dispatchLikeGif, dispatchUnlikeGif };
