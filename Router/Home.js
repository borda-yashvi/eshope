import React,{useContext, useEffect} from "react"
// import NoteContext from "../context/NoteContext"
import Navbar from "./Navbar"

const Home = () =>{
    return(
        <>
        <Navbar title="TextUtils"/>
         <h1> Home contain </h1>   
        </>
       
    )
}

export default Home 

// const Home = () =>{
//     const a = useContext(NoteContext)
//     useEffect(()=>{
//         a.update()
//     },[])
//     return(
//         <>
//          <h1> Home contain {a.state.Name} {a.state.Pwd}</h1>   
//         </>
       
//     )
// }