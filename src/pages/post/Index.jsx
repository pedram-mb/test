import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  if (posts.lenght) {
    return (
      <div className="mt-5">
        <h2>posts</h2>
      </div>
    );
  } else {
    return(
        <div className="container text-center mt-5">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
};
export default Posts;
