/*
 * action types
 */

export const LIKE_GIF = "LIKE_GIF";
export const UNLIKE_GIF = "UNLIKE_GIF";

/*
 * action creators
 */

export function likeGif(imageUrl) {
  return { type: LIKE_GIF, imageUrl };
}

export function unlikeGif(imageUrl) {
  return { type: UNLIKE_GIF, imageUrl };
}
