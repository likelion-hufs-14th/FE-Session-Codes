import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './LoginPage.css';
import axiosInstance from '../apis/axiosInstance';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login() {
        try {
            const response = await axiosInstance.post('/auth/login', {
                username,
                password,
            });
            console.log('응답 전체:', response.data);
            console.log('토큰:', response.data.accessToken);

            localStorage.setItem('accessToken', response.data.accessToken); // ← 추가
            window.alert('로그인 성공!');
            navigate('/');
        } catch (error) {
            console.log(error);
            window.alert(`로그인 실패: ${error.response?.data?.message ?? '알 수 없는 에러'}`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직은 이따 작성
        login();
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">로그인</h2>
            <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="username">아이디 *</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="아이디를 입력하세요"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호 *</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="auth-form-submit" type="submit">
                    로그인
                </button>
                <p className="auth-form-footer">
                    아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
                </p>
            </form>
        </div>
    );
}
