import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
function SwipeButtons() {
  return (
    <div>
      <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButtons;
