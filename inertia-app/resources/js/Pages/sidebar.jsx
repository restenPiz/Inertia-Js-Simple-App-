import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

function sidebar() {
    <>

        <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>

    </>
}

export default sidebar;