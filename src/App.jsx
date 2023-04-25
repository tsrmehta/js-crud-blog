import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import PostBlog from "./routes/post-blog/post-blog.component";
import NavBar from "./components/navbar/navbar.component";
import Post from "./routes/post/post.component";

import { GlobalStyle } from "./global.styles";
import "./App.css";

const NotFound = () => {
  return "404 Not found";
};

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="post-blog" element={<PostBlog />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="edit-blog/:postId" element={<PostBlog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
