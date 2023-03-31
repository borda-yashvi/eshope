// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Img from "./img/9.ico"
import {Link} from "react-router-dom"
import {Image} from "react-bootstrap"
import React from 'react';
import "./Navbar.css"

// function NavScrollExample() {

//  return (
//    <Navbar bg="light" expand="lg">  
//      <Container fluid>
//      <Image style={{width:'40px'}} src={Img}/>
//        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//        <Navbar.Toggle aria-controls="navbarScroll" />
//        <Navbar.Collapse id="navbarScroll">
//          <Nav      className="me-auto h-100"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           ></Nav>
//             <Nav.Link className='pe-4' href="Home">Home</Nav.Link>
//             <Nav.Link className='pe-4' href="About" onClick={()=>About()}>About</Nav.Link>
//             <Nav.Link className='pe-4' href="Contact">Contact</Nav.Link>
//             <NavDropdown className='pe-4' title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item className='pe-4' href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item  href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" className='pe-4' disabled>
//               Link
//             </Nav.Link>
         
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form> 
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// } 

// export default NavScrollExample;

import { useLocation } from 'react-router-dom';
const Navbar = (props)=>{
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

const Navigate=useNavigate  
  const About=()=>{
    Navigate("/About")
  }
  const Home=()=>{
    Navigate("/")
  }
  const Accordion=()=>{
    Navigate("/Accordion")
  }
  return(
      
       <nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}>
           <Image src={Img} id="icon"/>
           <Link className="navbar-brand" href="#">Navbar</Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
         
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/Home"?"active":" "}`} href="Home" onClick={()=>Home()}>Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item active">
                 <a className={`nav-link ${location.pathname==="/About"?"active":" "}`} href="About" onClick={()=>About()}>About Us</a>
               </li>
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <span className="sr-only">Toggle Dropdown</span>Dropdown
                 </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <a className="dropdown-item" href="#">Action</a>
                   <a className="dropdown-item" href="#">Another action</a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item" href="#">Something else here</a>
                 </div>
               </li>
               <li className="nav-item active">
                 <a className="nav-link"  href="/Accordion" onClick={()=>Accordion()}>Accordion</a>
               </li>
               <li className="nav-item active">
                 <a className="nav-link" href="#contact_Modal">Log in</a>
               </li>
             </ul>
             <form className="form-inline my-2 my-lg-0 d-flex">
               <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success" type="submit">Search</button>
             </form>
             <div className={`form-check form-switch ${props.mod=='light'?'dark':'light'}`}>
              <input className="form-check-input me-5" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable drak mode</label>
            </div>
           </div>
         </nav>
         )
  }

export default Navbar