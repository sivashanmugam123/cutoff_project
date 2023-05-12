import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/rightcourse.png'
import course from '../img/course.png'
import alert from '../img/alert1.jpg'
import CallToModelPopup from '../layouts/CallToModelPopup'
import './PortalHeader.css';
import ChoiceModelPopup from '../layouts/ChoiceModelPopup';
function PortalHeader(){
    return <>
   <Navbar  style={{width:'100%'}}>
   
        <Navbar.Brand href="http://localhost:5173"><img className='logosize' src={logo} alt="Logo" />
             
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
      
        <Navbar bg="primary1" variant="dark1" className='rightmenu'>
            
          <Nav className="me-auto" >       

            <Nav.Link href="#home" ><CallToModelPopup/></Nav.Link>
            <Nav.Link href="#home"><ChoiceModelPopup/></Nav.Link>
            <Nav.Link href="#home"><img className='iconsize1' src={course} alt="Logo" />All India Admisions</Nav.Link>
            <Nav.Link href="#home"><img className='iconsize1' src={alert} alt="Logo" />Alerts & Updates</Nav.Link>
            
          </Nav>
        
      </Navbar>
        </Navbar.Collapse>
      
    </Navbar>
    </>
}

export default PortalHeader;