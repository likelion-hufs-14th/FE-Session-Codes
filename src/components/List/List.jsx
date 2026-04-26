import './List.css';

export default function List({ data }) {
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
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      {data.tags.map((tag) => {
        return <span className='tag'>#{tag} </span>;
      })}
      <p style={{ color: 'gray' }}>{data.createdAt}</p>
    </div>
  );
}
