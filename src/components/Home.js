import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch"; // Custom Hook
const Home = () => {
  // Using custom hooks in react
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2>HomePage</h2> <br />
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Bolarinwa")}
        title="Bolarinwa's Blog"
        handleBlogDelete={handleBlogDelete}
      /> */}
    </div>
  );
};

export default Home;
