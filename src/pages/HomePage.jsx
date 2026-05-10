// src/pages/HomePage.jsx
import { Link } from 'react-router';
import './HomePage.css';

export default function HomePage({ posts }) {
    return (
        <div className="home-container">
            <h2 className="home-title">전체 글 ({posts.length}개)</h2>
            {posts.map((post) => (
                <Link key={post.id} to={`/detail/${post.id}`} className="post-card-link">
                    <div className="post-card">
                        <h3 className="post-card-title">{post.title}</h3>
                        <small className="post-card-meta">
                            {post.author} · {post.createdAt} · ❤️ {post.likeCount}
                        </small>
                    </div>
                </Link>
            ))}
        </div>
    );
}
