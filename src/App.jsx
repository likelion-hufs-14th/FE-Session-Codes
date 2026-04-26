import './App.css';
import List from './components/List/List';
import postData from './constants/postData';

function App() {
  var title = 'LikeLion HUFS';

  return (
    <>
      {/* 여긴 nav바 부분임 */}
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>
      {/* 글 부분임 */}

      {postData.map(function (data) {
        return (
          <List
            data={data}
            key={data.id}
          />
        );
      })}
    </>
  );
}

export default App;
