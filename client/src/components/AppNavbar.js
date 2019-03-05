import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Full App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">
                    <NavLink>About</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="student_list">
                    <NavLink>Student List</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="college_list">
                    <NavLink>College List</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
