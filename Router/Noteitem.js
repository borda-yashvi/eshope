import React,{useContext} from "react";
import NoteContext from "../context/NoteContext";
import Img from "./img/22.png"
import {Image} from "react-bootstrap"

const Item =(Props)=>{
const {data}=Props

    return (
        <div>
           {data.title}
            {data.description}
    <div className="card mx-xl-5" style={{width:"18rem"}}>
        <Image src={Img} className="card-img-top"  style={{width:"100%"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.email}</h5>
                <p className="card-text">{data.passwordHash}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
        </div>
    )
}

export default Item