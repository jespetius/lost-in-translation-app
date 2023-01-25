
import { useUser } from "../../context/UserContext"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    
    const { user } = useUser()

    return (
        <>
        <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand className='text-dark' >Lost In Translation</Navbar.Brand>
          { user !== null &&
          
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/translate">Translate</Nav.Link>
          </Nav>
}
        </Container>
      </Navbar>
        
        </>

        )
}
export default NavBar