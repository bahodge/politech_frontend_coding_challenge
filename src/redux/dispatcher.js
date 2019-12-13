import { store } from "./store";
import { likeGif, unlikeGif } from "./action";

const dispatchLikeGif = (id, url) => store.dispatch(likeGif(id, url));
const dispatchUnlikeGif = id => store.dispatch(unlikeGif(id));

export { dispatchLikeGif, dispatchUnlikeGif };
