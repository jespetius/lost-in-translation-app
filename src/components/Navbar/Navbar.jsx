
import { useUser } from "../../context/UserContext"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


const NavBar = () => {
    //to get current user and check if user are allowed to see all nav buttons
    const { user } = useUser()

    return (
        <>
        <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand className='text-dark' >Lost In Translation</Navbar.Brand>
          { user !== null &&
          
          <Nav className="me-auto">
            <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/translate">
                <Nav.Link>Translate</Nav.Link>
            </LinkContainer>
            <LinkContainer className="justify-content-end" to="/profile">
              <Nav.Link>Signed in as: {user.username}</Nav.Link>
            </LinkContainer>
          </Nav>
          

}
        </Container>
      </Navbar>
        
        </>

        )
}
export default NavBar