import React from "react";

const CommentDetail = ({ img, time, author, content }) => {
  return (
    <div>
      <div className="comment">
        <div className="content">
          <img src={img} alt="avatar" />
          <h5 className="author"> {author} </h5>
          <h6> {time} </h6>
          <p>{content} </p>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
