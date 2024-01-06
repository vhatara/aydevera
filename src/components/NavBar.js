import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import aydevera_logo from './../img/aydevera_logo.png'

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='me-auto'>
            <img src={aydevera_logo} alt='A.Y De Vera' />
        </Navbar.Brand>
        <Navbar.Text className='mx-auto'>
            <h1 className='d-none d-md-block d-lg-block'>Air Conditioning & <br/><span>Industrial Services</span></h1>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='navbar_link'>Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#whyus">Why Us?</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;