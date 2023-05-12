import Navbar from 'react-bootstrap/Navbar';
import footerico from '../img/footer_ico.png'
function PortalFooter(){
    return <>
<Navbar>
      
        <Navbar.Brand href="http://localhost:5173"> <img className='iconsize11' src={footerico} alt="Logo" /> </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
         
          </Navbar.Text>
        
        </Navbar.Collapse>
    
    </Navbar>
    </>
}

export default PortalFooter;