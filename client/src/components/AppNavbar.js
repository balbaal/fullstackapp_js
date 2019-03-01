import React, {Component} from "react"
import {
    Container,
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

class AppNavbar extends Component{
    state = {
        isOpen:false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

        this.props.onLoading(this.state.isOpen)
    }

    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Full App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/student_list">Student List</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/college_list">College List</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar