import { store } from "./store";
import { likeGif } from "./action";

const dispatchLikeGif = imageUrl => store.dispatch(likeGif(imageUrl));

export { dispatchLikeGif };
