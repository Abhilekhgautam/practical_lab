import { useState } from "react";
import Editor from "@monaco-editor/react";
import './App.css';

import {AiFillSetting} from "react-icons/ai"

const CardSettings = () => {

  

  const settingStyle = {
    background : "#282c34",
    color      : "white",
    display    : "flex",
    justifyContent:"column",
    padding    : "10px"
  }

  const [selectedOption, setSelectedOption] = useState("dark");

  const handleOptionChange = (e) =>{
    setSelectedOption(e.target.value)
  }

  return(
    <div className="card-container" style={settingStyle}>
         <div>
         <input type="radio" value="light" checked = {selectedOption === "light"} onChange={handleOptionChange}/>
            Light
          </div>

          <div>
         <input type="radio" value="dark" checked={selectedOption === "dark"} onChange={handleOptionChange}/>
            VS-Dark
          </div>
    </div>
  );
}

const EditorNav = () => {

  const navbarStyle = {
    background:"#1f2937",
    display:"flex",
    flexDirection:"column",
  }

  const btnStyle = {
     border: "1px solid black",
     outline:"none",
     padding: "5px",
     color: "white",
     background:"#6366f1",
     fontSize:"20px",
     cursor:"pointer",
  }

  const settingClickHandler = (e) =>{
    e.preventDefault();
    console.log("Setting is clicked")
  }

  return(
    <nav style={navbarStyle}>
      <ul>
         <button onClick = {settingClickHandler}style={btnStyle}> <AiFillSetting size={16}/>Settings</button>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <>
    {/* <EditorNav/> */}
    <CardSettings/>
    {/* <Editor
      height = "90vh"
      defaultLanguage= "cpp"
      defaultValue= "//type your code here"
      theme="vs-dark"
      /> */}

    </>
    
  );
}

export default App;
