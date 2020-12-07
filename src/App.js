
import './App.css';
import {useState} from 'react'

function App() {
  const[isMenuOpen,setIsMenuOpen]=useState(false)

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

  return ( 
  <div className="app">
    
    
      <header className="header">
        <h2 className="header-title"> Start BootStrap </h2>
        <nav className="nav-bar">
          <p className="nav-item">About</p>
          <p className="nav-item">Projects</p>
          <p className="nav-item">Contact</p>
        </nav>
      <div className="menu" onClick={toggleMenu}>
        <p className="menu-title" onClick={toggleMenu}>Menu</p>
        <img onClick={toggleMenu}
        src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/29-512.png"
        className="hamburger" alt="menu icon"
        />
        
          <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
            <p className="mobile-nav-item">About</p>
            <p className="mobile-nav-item">Projects</p>
            <p className="mobile-nav-item">Contact</p>
          </nav>
        </div>
        
      </header> 

      <div class="hero-image">
        <body className="body">
          <h1 className="body-title" >GRAYSCALE</h1>
          <h3 className="body-text">A free, responsive, one page  BootStrap theme <br></br>
            created by Start BootStrap.</h3>
          <button className="start-button">GET STARTED</button>
        </body>
        </div>
  </div>
)}

export default App;
