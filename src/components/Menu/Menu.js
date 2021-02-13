import React from 'react';
import './Menu.css';
import {Navbar,Button,Form,NavDropdown,FormControl,Nav} from 'react-bootstrap'
import Link from "react-router-dom/Link";
// nav-bar component
const Menu = ({nom,age}) => <div className="menu" > 

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Button variant="outline-success"><Link to="/deposer-une-annonce">Deposer une annonce</Link></Button>
      <Nav.Link ><Link  to="/">Accueil</Link></Nav.Link>
      <Nav.Link ><Link to="/connexion">se connecter</Link></Nav.Link>
       
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
 

</div>


export default Menu;