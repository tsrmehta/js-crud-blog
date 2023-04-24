import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import PostBlog from "./routes/post-blog/post-blog.component";
import NavBar from "./components/navbar/navbar.component";

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
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
