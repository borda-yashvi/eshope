import React,{useState} from "react"
import Navbar from "./Navbar"

// import NoteContext from "../context/NoteContext"
// import Data from "./data"

// const About = () =>{
    
//     return(
//         <div className="container justify-items-center">
//        <h1>About contain </h1>
//        <form>
//         <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1"/>
//         </div>
//         <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//             <label className="form-check-label" for="exampleCheck1">Check me out</label>
//         </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//             <h1>add note</h1>
//         <Data></Data>
//         </div>
//     )
// }

// export default About 
/* 
// const About = () =>{
//     const a = useContext(NoteContext)
//     return(
//        <h1>
//         About contain {a.Pwd}
//        </h1>
//     )
// } */

const State=(props)=>{
    const up=()=>{
        console.log("upper was clicked"+text);
        setText(text.toUpperCase())
    }
    const lw=()=>{
        console.log("upper was clicked"+text);
        setText(text.toLowerCase())
    }
    const cl=()=>{
        console.log("upper was clicked"+text);
        setText("")
    }
    const cp=()=>{
        console.log("copy text");
        const text=document.getElementById("Box")
        console.log("=text",text);
        text.select()
        // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text)
        // textAreaRef.current.select();
        // e.target.focus();
        // setText('Copied!');
    }
    const es=(newText)=>{
        let nt = text.split(/[ ]+/)
        console.log(nt);
        setText(newText.join(" "))
    }
    const on=(event)=>{ 
        console.log("upper was clicked"+text);
        setText(event.target.value)
    }
    const [text,setText]=useState('enter text')

    const [mod,mode] = useState('light')
    const toggleMode =()=>{
      if(mod==="light"){
            mode('dark')
            document.body.style.backgroundColor='grey'
            document.body.style.color='white'
      }
      else{
            mode('light')
            document.body.style.backgroundColor='white'
            document.body.style.color='grey'
      }
      
    }


  const w= text.split(" ").length

    return(<>
    <Navbar title="TextUtils" mod={mod} toggleMode={toggleMode}/>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div>
             <textarea className="from-control" value={text} onChange={on} style={{backgroundColor:props.mod==='dark'?'blue':'pink'}} id="Box" cols="10" rows="15"></textarea>
        </div>
       
        <br/><button className="btn btn-danger" onClick={up}>conver to upper case</button>
        <button className="btn btn-warning ms-3" onClick={lw}> conver to lower case</button>
        <button className="btn btn-success ms-3" onClick={cl}> cls text</button>
        <button className="btn btn-primary ms-3" onClick={cp}>copy text</button>
        <button className="btn btn-primary ms-3" onClick={es}>extra space</button>
    </div>
    <div className="container my-lg-3">
        <h1>text character {text.length} sentense  {w}</h1>
        <h1>text read {0.008*text.split(" ").length}</h1>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>)
}

export default State