import './App.css'
import List from './components/List/List'

function App() {

  var title = "LikeLion HUFS"

  return (
    <>
      {/* 여긴 nav바 부분임 */}
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>
      
      {/* 글 부분임 */}
      <List/>
      <List/>
      <List/>
    </>
  )
}



export default App
