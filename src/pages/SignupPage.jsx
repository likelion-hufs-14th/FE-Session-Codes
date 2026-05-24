import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './SignupPage.css';
import axiosInstance from '../apis/axiosInstance';

export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // ← 추가

    async function signup() {
        try {
            const response = await axiosInstance.post('/auth/signup', {
                username,
                password,
            });
            console.log(response.data);
            window.alert('회원가입에 성공했습니다 ! 로그인 해주세요.');
            navigate('/login');
        } catch (error) {
            console.log(error);
            window.alert(`회원가입 실패: ${error.response?.data?.message ?? '알 수 없는 에러'}`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 로직은 이따 작성
        signup();
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">회원가입</h2>
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
                    회원가입
                </button>
                <p className="auth-form-footer">
                    이미 계정이 있으신가요? <Link to="/login">로그인</Link>
                </p>
            </form>
        </div>
    );
}
