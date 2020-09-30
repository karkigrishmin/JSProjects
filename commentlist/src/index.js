import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/index.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="comment-list">
          <ApprovalCard>
            <CommentDetail
              img={faker.image.avatar()}
              author="Grishmin"
              time="Today at 12:00pm"
              content="wow"
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              img={faker.image.avatar()}
              author="Grish"
              time="Today at 11:00pm"
              content="nice"
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              img={faker.image.avatar()}
              author="Messi"
              time="Today at 10:00pm"
              content="cool"
            />
          </ApprovalCard>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
