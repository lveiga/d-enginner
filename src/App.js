import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap'
import {
  Router,
  Link
} from "react-router-dom"
import Routes from './routes/index'
import history from './utils/history';


function App() {
  return (
    <Router history={history} >
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand><Link to="/">D-Engineer</Link></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          
            <ReactBootStrap.Nav.Link >
              <Link to= "/lancamentos" > 
                Lançamentos
              </Link>
            </ReactBootStrap.Nav.Link>
          
          <ReactBootStrap.NavDropdown title="Parametrização" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item > 
              <Link to="/produtos" >
                Produtos
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item >
              <Link to="/obras" >
                Obras
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item >Menus</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>

        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link >
            Admin
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>

      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>

    
      <Routes />

      </div>
    </Router>
  );
}

export default App;
