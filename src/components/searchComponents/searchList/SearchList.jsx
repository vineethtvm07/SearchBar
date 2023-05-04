import  './searchList.scss'

export const SearchList = ({searchList}) => {
  return (
    <div className='searchList-container'>
     {searchList.map((data) => (
         <div className="list-items" key={data.id}>
         <img width='50' height='50' style={{objectFit: "contain"}} 
         src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
         <p className='list-title'> {data.title} </p>
       </div>
     ))}
      
    </div>
  )
}

