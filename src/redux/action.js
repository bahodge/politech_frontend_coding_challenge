/*
 * action types
 */

export const LIKE_GIF = "LIKE_GIF";
export const UNLIKE_GIF = "UNLIKE_GIF";
export const START_OVER = "START_OVER";

/*
 * action creators
 */

export function likeGif(id, url, weirdnessValue, title, searchTerm) {
  return { type: LIKE_GIF, id, url, weirdnessValue, title, searchTerm };
}

export function unlikeGif(id) {
  return { type: UNLIKE_GIF, id };
}

export function startOver() {
  return { type: START_OVER };
}
