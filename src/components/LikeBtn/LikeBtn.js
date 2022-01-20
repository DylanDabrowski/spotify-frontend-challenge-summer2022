import React, { useEffect } from "react";
import "./LikeBtn.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

class LikeBtn extends React.Component {
  state = {
    liked: false,
  };

  render() {
    return (
      <span
        className="likebtn"
        onClick={this.setState({ liked: !this.state.liked })}
      >
        {this.state.liked === false ? <AiOutlineHeart /> : <AiFillHeart />}
      </span>
    );
  }
}

export default LikeBtn;
