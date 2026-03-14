import './App.css'
import List from './components/List/List'

function App() {

  var title = "LikeLion HUFS";
  
  let boardList = [
    {
      id : 1,
      title : "안녕하세요. 아기사자입니다.",
      content : "집에 가고 싶어요. 종강주세요.",
      date : "2026년 3월 1일"
    },
    {
      id : 2,
      title : "안녕하세요. 운영진입니다.",
      content : "저도 집에 가고 싶어요. 종강주세요",
      date : "2026년 3월 2일"
    },
    {
      id : 3,
      title : "안녕하세요. 대표입니다.",
      content : "저는 집에 못 가요. 살려주세요.",
      date : "2026년 3월 3일"
    },
    {
      id : 4,
      title : "그냥 아무렇게나 써봤습니다.",
      content : "이렇게 하니 굳이 글의 개수를 몰라도 되는군요.",
      date : "2026년 3월 3일"
    }
  ]

  return (
    <>
      {/* 여긴 nav바 부분임 */}
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>
      {/* 글 부분임 */}

      {
      boardList.map(function(data,){
        return (<List title={data.title} content={data.content} date={data.date} key={data.id}/>)
      })
      }

    </>
  )
}



export default App
