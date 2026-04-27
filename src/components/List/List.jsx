
import { useState } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './List.css';

export default function List({ data, deletePost }) {
  const [isOpen, setIsOpen] = useState(false); // 추가

  return (
    <div className='list'>
      {/* 작성자 정보 부분 */}
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <img
          className='profile-img'
          src={`${data.author.profileImg}`}
        />
        <div
          style={{
            height: '20px',
            fontSize: '15px',
            alignContent: 'center',
          }}>
          {data.author.name} ({data.author.role})
        </div>
      </div>

      <h3 onClick={() => setIsOpen(!isOpen)}>{data.title}</h3>

      {isOpen && (
        <>
          <p>{data.content}</p>
          {data.tags.map((tag) => {
            return <span className='tag'>#{tag} </span>;
          })}
          <p style={{ color: 'gray' }}>{data.createdAt}</p>
        </>
      )}

      <LikeButton />
      <button onClick={() => deletePost(data.id)}>삭제</button>

    </div>
  );
}
