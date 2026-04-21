import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
    // useState로 하트 상태 만들기
    const [like, setLike] = useState(0);

    return (
        <button
            className="like-button"
            onClick={() => {
                setLike(like + 1);
                console.log(like);
            }}
        >
            🤍 좋아요 {like}개
        </button>
    );
}

export default LikeButton;
