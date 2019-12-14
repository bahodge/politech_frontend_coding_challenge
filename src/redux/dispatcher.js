import { store } from "./store";
import { likeGif, unlikeGif, startOver } from "./action";

const dispatchLikeGif = (id, url, weirdnessValue, title, searchTerm) =>
  store.dispatch(likeGif(id, url, weirdnessValue, title, searchTerm));
const dispatchUnlikeGif = id => store.dispatch(unlikeGif(id));
const dispatchStartOver = () => store.dispatch(startOver());

export { dispatchLikeGif, dispatchUnlikeGif, dispatchStartOver };
