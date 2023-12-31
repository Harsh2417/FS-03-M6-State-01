import './App.css';
import React, { useState } from "react";
import Toggle from './Components/Toggle'; 
function App() {
  const btext = "Dark Mode";
  const [buttonText, setButtonText] = useState(btext);
  const [style, setStyle] = useState("LightTheme");
  const [color , setColor] = useState("black")
  const changeStyle = (Toggling) => {
    setStyle(Toggling);
  };
  function toggleButton() {
    if (buttonText === "Light Mode") {
      setButtonText("Toggle");
      setColor("Crimson")
      console.log(buttonText)
      changeStyle("white");
    } else {
      setButtonText("Light Mode");
      setColor("white");
      console.log(buttonText)
      changeStyle("black");
    }
  }
  return (
    <div  className='body' style={{backgroundColor : style , color : color}}>
    <div className="App" >
       <header className="App-header" style={{backgroundColor : style , color : color}}>
        <h2 >Overreacted</h2>
        <button onClick={toggleButton}>{buttonText}</button>
      </header>

      <Toggle
        body_title="The WET Codbase"
        postDate="Sundy 4th,2020 11 min read"
        thoughts_para="Come waste your time with me"
      />
      <Toggle
        body_title="Goodby,Clean Code"
        postDate="Friday 22nd 2019, 5 min read"
        thoughts_para="Let  clean code guide  you, then let itt go"
      />
      <Toggle
        body_title="My Decade In Review"
        postDate="Saturday 11th 2018, 5 min read"
        thoughts_para="A personal reflection"
      />
      <Toggle
      
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th 2015, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      
    </div>
    </div>
    
  );
}

export default App;