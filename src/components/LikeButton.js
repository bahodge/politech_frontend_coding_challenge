import React from "react";
import PropTypes from "prop-types";
import { LIKE_GIF } from "../redux/action";

const LikeButton = props => {
  return <div>{console.log(LIKE_GIF)}</div>;
};

LikeButton.propTypes = {};

export default LikeButton;
