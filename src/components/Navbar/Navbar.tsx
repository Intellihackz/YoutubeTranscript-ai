import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>TwT Transcript AI</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Header;
