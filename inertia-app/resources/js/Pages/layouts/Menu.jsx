import React from 'react';
import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';

function Menu() {
    return (
        <Navbar {...props}>
            <Navbar.Brand href="#">RSUITE</Navbar.Brand>
            <Nav onSelect={onSelect} activeKey={activeKey}>
                <Nav.Item eventKey="1">Home</Nav.Item>
                <Nav.Item eventKey="2">News</Nav.Item>
                <Nav.Item eventKey="3">Products</Nav.Item>
                <Nav.Menu title="About">
                    <Nav.Item eventKey="4">Company</Nav.Item>
                    <Nav.Item eventKey="5">Team</Nav.Item>
                    <Nav.Item eventKey="6">Contact</Nav.Item>
                </Nav.Menu>
            </Nav>
            <Nav pullRight>
                <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Menu;