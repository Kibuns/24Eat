import { Container } from "reactstrap";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TableNr from "../QR-code/TableNr";

const HeaderBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto" style={{ color: "white" }}>
          <TableNr />
        </Nav>

        <Nav className="me-auto">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/`}
          >
            Menu
          </Link>
        </Nav>

        <Nav>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/basket`}
          >
            <ShoppingBasketIcon />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
