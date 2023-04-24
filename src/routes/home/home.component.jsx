import { useState, useEffect } from "react";

import { getRequest } from "../../utils/fetch-api.util";

import { HomeWrapper } from "./home.styles";

const SITE_ID = 20121;

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogData = async () => {
    const { response, error } = await getRequest(
      `http://localhost:8080/o/headless-delivery/v1.0/sites/${SITE_ID}/blog-postings`
    );
    if (!error && response) {
      setBlogs(response?.items);
    }
  };

  useEffect(() => {
    fetchAllBlogData();
  }, []);

  return (
    <HomeWrapper>
      {blogs.map((blog, i) => (
        <div key={i}>
          <h3>{blog.headline}</h3>
          <p>{blog.description}</p>
        </div>
      ))}
    </HomeWrapper>
  );
};

export default Home;
