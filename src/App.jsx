// App.jsx (DetailPage 라우트 추가)
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PostPage from "./pages/PostPage";
import data from "./dummy/data";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import EditPage from "./pages/EditPage";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPost() {
    try {
      const response = await axios.get(
        "https://fe-server-production.up.railway.app/posts",
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route
          path="/detail/:id"
          element={<DetailPage posts={posts} getPost={getPost} />}
        />
        <Route path="/write" element={<PostPage getPost={getPost} />} />
        <Route path="/edit/:id" element={<EditPage getPost={getPost} />} />
      </Routes>
    </>
  );
}

export default App;
