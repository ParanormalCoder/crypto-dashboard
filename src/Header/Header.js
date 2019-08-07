import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';

export default class Header extends React.PureComponent {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Row>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Crypto Currency Dashboard</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Crypto list</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/portfolio">Portfolio</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Row>
        );
    }
}
