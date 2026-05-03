import "./App.css";
import List from "./components/List/List";
import postData from "./constants/postData";
import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import { useState } from "react";
import { createContext } from "react";

// App.jsx

export const Context = createContext();

function App() {
  var title = "LikeLion HUFS";

  const [viewCount, setViewCount] = useState(10);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [posts, setPosts] = useState(postData); // 추가

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <div className="navbar">
        <span className="navbar-title">{title} 블로그</span>
      </div>

      <Context.Provider value={{ viewCount }}>
        {/* 글 목록 */}
        {posts.map(function (data) {
          return <List data={data} key={data.id} deletePost={deletePost} />;
        })}
      </Context.Provider>

      {/* 글 작성 폼 */}
      <div>
        <input
          placeholder="제목"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
        <input
          placeholder="내용"
          onChange={(e) => setNewContent(e.target.value)}
          value={newContent}
        />
        <button
          onClick={() => {
            const newPost = {
              id: Date.now(), // 현재 시간을 id 로. 겹칠 일이 없음
              title: newTitle,
              content: newContent,
              author: {
                name: "나",
                role: "14기 아기사자",
                profileImg: "/profile.png",
              },
              tags: [],
              likes: 0,
              createdAt: "2026-04-21",
            };

            setPosts([...posts, newPost]); // 기존 배열 + 새 글

            setNewTitle(""); // 입력칸 비우기
            setNewContent("");
          }}
        >
          글 추가
        </button>
      </div>
    </>
  );
}
export default App;
