import { store } from "./store";
import { likeGif } from "./action";

const dispatchLikeGif = (id, url) => store.dispatch(likeGif(id, url));

export { dispatchLikeGif };
