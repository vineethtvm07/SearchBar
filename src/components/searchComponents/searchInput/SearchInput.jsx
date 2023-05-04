import './searchInput.scss'
import { Close } from '@material-ui/icons'

const SearchInput = ({searchInputValue, handleChange, clearSearch}) => {
 
  return (
    <div  className='searchInput-container'>
      <input value={searchInputValue} onChange={handleChange} type="text" placeholder='Search here...' />
     {
      searchInputValue &&  
      <button onClick={clearSearch} className='close-btn'>
      <Close className='close-icon'/>
    </button>
     }
    </div>
  )
}

export default SearchInput
