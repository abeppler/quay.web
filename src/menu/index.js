import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card } from 'react-bootstrap';
import BackgroundImage from '../../src/assets/images/textura-madeira.jpg';
import CardBackgroundImage from '../../src/assets/images/logo-organica.png';
import './style.css';

const Menu = ({

}) => {

  const menuItems = [
    {
      text: 'Nossa História',
      link: '#nossa-historia',
    },
    {
      text: 'As Feiras',
      link: '#feiras',
    },
    {
      text: 'Produtos',
      link: '#produtos',
    },
    {
      text: 'Blog',
      link: '#blog',
    },
    {
      text: 'Parceiros',
      link: '#parceiros',
    },
    {
      text: 'Contato',
      link: '#contato',
    },
    {
      text: 'Área do Cliente',
      link: '#area-cliente',
    },
  ]

  const bodyStyle = {
    backgroundImage: "url(" + BackgroundImage + ")",
    width: '100%',
  }

  const cardTitleStyle = { 
    width: '318px', 
    height: '180px', 
    backgroundColor: '#d56805', 
    position: 'fixed',
    left: '40px',
    backgroundImage: "url(" + CardBackgroundImage + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div style={bodyStyle}>
      <Card style={cardTitleStyle} />
      <Navbar variant="quay" expand="lg">
        <Navbar.Brand href="#home" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="quay" className="mr-auto">
            {menuItems.map((menuItem) =>
              <Nav.Link key={menuItem.link}
                style={{ textColor: 'white' }} 
                href={menuItem.link}>{
                  menuItem.text
                }
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;