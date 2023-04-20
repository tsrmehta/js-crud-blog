import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import PostBlog from "./routes/post-blog/post-blog.component";

import { GlobalStyle } from "./global.styles";
import "./App.css";

const Work = () => {
  return "work";
};
const NotFound = () => {
  return "404 Not found";
};

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/post-blog" element={<PostBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
