import React, { useState } from "react"
import Navbar  from "./Navbar"

const Accordion=(props)=>{
    const [style,setStyle] = useState({
      color:'white',
      backgroundColor:'black'
    })

    const [btn,setBtn] = useState("enable dark mode")

    const toggle =()=>{
      if(style.color=="white"){
          setStyle({
            color:'black',
            backgroundColor:'white'
          })
          setBtn("enable dark mode")
      }
      else{
        setStyle({
            color:'white',
            backgroundColor:'black'
          
        })
        setBtn("enable light mode")
      }
      
    }

    
    const [mod,mode] = useState('light')
    const toggleMode =()=>{
      if(mod=="light"){
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

    return(
        <>
   <Navbar title="TextUtils" mod={mod} toggleMode={toggleMode}/>
    <div className={`${props.mode}`}>
        <div className="container" style={style}>
        <h1>Accordionn</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any
                 of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-
                 body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any 
                of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion
                -body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any 
                of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion
                -body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <button onClick={toggle} className="btn text-light btn-white">{btn}</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Accordion


// import React, {useState} from "react"
// import Navbar from "./Navbar"

// const Accordion=(props)=>{
//     const [mod,mode] = useState('light')

//     const toggleMode =()=>{
//       if(mod=="light"){
//             mode('dark')
//             document.body.style.backgroundColor='black'
//             document.body.style.color='white'
//             alert("enable dark mode", "success")
//             document.title="React App- dark mode"
//             setInterval(()=>{
//               document.title="amazing  mode"
//             },1000)
//       }
//       else{
//             mode('light')
//             document.body.style.backgroundColor='white'
//             document.body.style.color='black'
//             document.title="React App- light mode"
//       }
//     }

//     return(
//         <>
//         <Navbar title="TextUtils" mod={mod} toggleMode={toggleMode}/>
//         <div className={`${props.mode}`}>
//           <h1>accordian</h1>
//         </div>
        
        {/* <div className="container" style={style}>
        <h1>Accordionn</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any
                 of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-
                 body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any 
                of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion
                -body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we 
                use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any 
                of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion
                -body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <button onClick={toggle} className="btn btm-white">{btn}</button>
        </div>
        </div> */}
//         </>
//     )
// }

// export default Accordion