// src/pages/DetailPage.jsx
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import './DetailPage.css';

export default function DetailPage({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const matched = posts.filter((p) => p.id === Number(id))[0];
        setPost(matched);
    }, [id]);

    if (!post) {
        return <div className="detail-loading">로딩 중...</div>;
    }

    return (
        <div className="detail-container">
            <button className="detail-back-button" onClick={() => navigate(-1)}>
                ← 뒤로
            </button>
            <h1 className="detail-title">{post.title}</h1>
            <p className="detail-meta">
                {post.author} · {post.createdAt} · ❤️ {post.likeCount}
            </p>
            <hr className="detail-divider" />
            <p className="detail-description">{post.description}</p>
        </div>
    );
}
