import React, {useState} from 'react'

function Search() 
{
  const[link, setLink] = useState(null);

  const buy = () => {
    setLink('https://www.zillow.com/homes/for_sale/1-_beds/?searchQuery');
  };

  const rent = () => {
    setLink('https://www.zillow.com/homes/for_rent/1-_beds/?searchQuery');
  };

  return (
    <div>
      <div>

          <button button class = "items" id = "q2a1" onClick={buy}>Buy</button>
          <button button class = "items" id = "q2a2" onClick={rent}>Rent</button>
        
      </div>

      {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" id = "searchButton">
            {link.includes('for_sale') ? 'Browse Houses for Sale' : 'Browse Houses for Rent'}
          </a>
      )}
    </div>
    
  );
  
}

export default Search;



