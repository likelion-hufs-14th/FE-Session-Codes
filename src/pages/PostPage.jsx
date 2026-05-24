import { useState } from 'react';
import './PostPage.css';
import { useNavigate } from 'react-router';
import axiosInstance from '../apis/axiosInstance';

export default function PostPage({ getPost }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    async function writePost() {
        try {
            const response = await axiosInstance.post(
                '/posts',
                {
                    title,
                    description,
                    author,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                },
            );
            console.log(response.data);
            window.alert('글이 작성되었습니다.');
            await getPost();
            navigate('/');
        } catch (error) {
            console.log(error);
            console.log('상태 코드:', error.response?.status);
            console.log('응답 데이터:', error.response?.data);
            window.alert(`에러: ${error.response?.status} - ${error.response?.data?.message ?? ''}`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        writePost();
    };

    return (
        <div className="post-form-container">
            <h2 className="post-form-title">글 쓰기</h2>
            <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="title">제목 *</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">내용 *</label>
                    <textarea
                        id="description"
                        placeholder="내용을 입력하세요"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={8}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">작성자 *</label>
                    <input
                        id="author"
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button className="post-form-submit" type="submit">
                    등록하기
                </button>
            </form>
        </div>
    );
}
