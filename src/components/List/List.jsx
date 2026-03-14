export default function List({title, content, date}) {

  return(
      <div className='list'>
        <h3>{title}</h3>
        <p>{content}</p>
        <p style={{color : 'gray'}}>{date}</p>
      </div>
  )
}