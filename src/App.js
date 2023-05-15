import { useState } from "react";
import Editor from "@monaco-editor/react";
import './App.css';

//import {AiFillSetting} from "react-icons/ai"
// <AiFillSetting size={16}/>

// const CardSettings = () => {

//   const settingStyle = {
//     background : "#282c34",
//     color      : "white",
//     display    : "flex",
//     justifyContent:"column",
//     padding    : "10px"
//   }

//   const [selectedOption, setSelectedOption] = useState("dark");

//   const handleOptionChange = (e) =>{
//     setSelectedOption(e.target.value)
//   }

//   return(
//     <div className="card-container" style={settingStyle}>
//          <div>
//          <input type="radio" value="light" checked = {selectedOption === "light"} onChange={handleOptionChange}/>
//             Light
//           </div>

//           <div>
//          <input type="radio" value="dark" checked={selectedOption === "dark"} onChange={handleOptionChange}/>
//             VS-Dark
//           </div>
//     </div>
//   );
// }

const EditorNav = ({sourceCode}) => {

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

  const RunClickHandler = (e) =>{
    e.preventDefault();
    console.log( sourceCode)
    fetch("http://localhost:5000/compile",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({code: sourceCode}),
     
    })
    .then((data) => console.log("Request Sent"))
    .catch((e) => console.log("Something went wrong: " + e))
    
  }

  return(
    <nav style={navbarStyle}>
      <ul>
         <button onClick = {RunClickHandler} style={btnStyle}>Run</button>
      </ul>
    </nav>
  )
}

const EditorWindow = () => {

  const [code, setCode] = useState("")

  const handleCodeChange = (code) => {
   setCode(code)
  }

  return (
    <>
      <EditorNav sourceCode = {code}/>
      <Editor
      height = "100vh"
      defaultLanguage= "rust"
      defaultValue= "//type your code here"
      theme= "vs-dark"
      value = {code}
      onChange={handleCodeChange}
      />
    </>
  )
}

function App() {
  return (
    <>
     <EditorWindow/>

    </>
    
  );
}

export default App;
