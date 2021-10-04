import { Container } from 'reactstrap';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HeaderBar = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link style={{ textDecoration: 'none' }} to={`/`}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>        
        <Nav className="me-auto">
          <Link style={{ textDecoration: 'none', color: 'white' }} to={`/category`}>
            Menu
          </Link>
        </Nav>
        <Nav>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={`/basket`}>
            <ShoppingBasketIcon/>
          </Link>
        </Nav>
        </Container>
    </Navbar>
    );
}

export default HeaderBar;