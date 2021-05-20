
import './App.css';
import { useState } from 'react';

const a = {
  user: {
    name: {
      firstName: "James",
      lastName: "Ibori"
    },  
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that"
    },
    work: {
      firstJob: "Developer",
      seconJob: "Teaching",
    },
    hobbies: {
      firstHobby: 'Games',
      secondHobby: 'Sleep',
    }
  }
}
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState('');
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  const handleSearch = () => {
    var location = "Not found";
    for(let key in a.user){
      const obj = a.user[key];
      for (let item in obj){
        if(obj[item].toLowerCase() === searchInput.toLowerCase()) {
          location = `a.user.${key}.${item}`
          break;
        }
      }
    }
    setLocation(location)
  }
  return (
    <div className="container">
      <div className="searchBox">
        <input 
          className="searchInput" 
          type="text" 
          placeholder="Search" 
          value={searchInput}
          onChange={handleChange}
        />
        <button className="searchButton" onClick={handleSearch}>
            Search
        </button>
      </div>
      { location && <p className="searchResult">Search Result: {location}</p>}
    </div>
    
  );
}

export default App;
