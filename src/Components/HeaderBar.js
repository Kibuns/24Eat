import { Container } from 'reactstrap';
import {Nav, Navbar} from 'react-bootstrap';

const HeaderBar = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category">Menu</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    );
}

export default HeaderBar;