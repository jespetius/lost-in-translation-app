
import { useUser } from "../../context/UserContext"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    //to get current user and check if user are allowed to see all nav buttons
    const { user } = useUser()

    return (
        <>
        <Navbar bg="warning" variant="light" expand="lg" >
        <Container>
          <Navbar.Brand className='text-dark' >Lost In Translation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          { user !== null &&
          
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/translate">
                <Nav.Link>Translate</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
                <Nav.Link>{user.username}</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
          

}
        </Container>
      </Navbar>
        
        </>

        )
}
export default NavBar