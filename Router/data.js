import React,{useContext} from "react";
import NoteContext from "../context/NoteContext";
import Noteitem from "../components/Noteitem"

const Data =()=>{
    const context = useContext(NoteContext)
    const {datas,state} = context

    return (
        <div className="container d-flex my-3">
            <h2>You Notes</h2>
            {datas.map((data)=>{
                return <Noteitem data={data}/>
            })}

        </div>
    )
}

export default Data