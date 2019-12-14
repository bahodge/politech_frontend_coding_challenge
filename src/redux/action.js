/*
 * action types
 */

export const LIKE_GIF = "LIKE_GIF";
export const UNLIKE_GIF = "UNLIKE_GIF";

/*
 * action creators
 */

export function likeGif(id, url, weirdnessValue) {
  return { type: LIKE_GIF, id, url, weirdnessValue };
}

export function unlikeGif(id) {
  return { type: UNLIKE_GIF, id };
}
