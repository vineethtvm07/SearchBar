
import './searchComponent.scss'
import {Search} from '@material-ui/icons'
import SearchInput from './searchInput/SearchInput'
import  {SearchList}  from './searchList/SearchList'
import axios from 'axios'
import { useEffect, useState } from 'react'

 export const SearchComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState("")
  const [searchList, setSearchList] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=22acbb37bf9c6c11c3c55606d7aefe67&with_genres=28'

  const handleChange = (event) => {
    setSearchInputValue(event.target.value)
    

  }; 

  const clearSearch = () => {
    setSearchInputValue("")
    setSearchList([])
    
  };
  

  const fetchMovieList = async (query) => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: searchInputValue,
        }
      });
      setSearchList(response.data.results)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(searchInputValue) {
        fetchMovieList()
      }
    }, 1000);
    console.log('Mounting...');
    return () => {
      clearTimeout(timeout);
      console.log('Unmounting...');
    }
  }, [searchInputValue]);
  

  return (
      <div className='search-component-container'>
      <div className="header-section">
        <Search className='search-icon'/>
        <h2>Looking for a movie ?</h2>
      </div>
      <SearchInput searchInputValue={searchInputValue} handleChange={handleChange} clearSearch={clearSearch} />
      <SearchList searchList={searchList} />  
    </div>
  )
}

