import './App.css';
// import React from 'react';
import Search from './Search';
// <script src="/Search.jsx" defer></script>

export default function App() {
  {/* smooth scrolling*/}
  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section){
      section.scrollIntoView({behavior:'smooth'});
    }
  }

  return (
    <main>
      <nav>
        <ul>
          <li> <a href= "./App.jsx" id = "home"> 🏠︎ </a> </li>
          <li> <a href= "https://www.zillow.com/"> Home </a> </li>
          <li> <a href= "https://www.zillow.com/"> About </a> </li>
          <li> <a href= "https://www.zillow.com/"> Saved </a> </li>
        </ul>
      </nav>
      
      <div id = "header">
        <h1> Find My Home </h1>
      </div>
      
      <div>
        <h2> Looking for a home doesn't have to be difficult.</h2>
      </div>

      <div id = "section1">
        <div class= "flexBox">
          <div class = "box">
            <p id = "tagline"> Find your dream home today using our advanced home search system, and create an account to stay up to date on new listings and save your favorite picks!</p>
            
              <button onClick={() => scroll('section2')} id = "button1" > Get Started ⌕ </button>
            
            <li> <a href = "https://create-react-app.dev/docs/adding-images-fonts-and-files/" id = "createAccount"> Create an account </a></li>
            <img src={`/Header.jpg`}/>

          </div>
        </div>  
      </div>
      
      <div id = "section2">
        <div class = "flexBoxButtons">
          {/*Form */}
          <Search />
        </div>
        <div>
          <br></br>
          <br></br>
        </div>

      </div>
      
    </main>
  )
}
