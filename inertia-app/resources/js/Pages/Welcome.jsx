import React from "react";
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import '../Pages/styles/styles.css';
import { Table } from 'rsuite';

function Welcome() {
    return (
        <>
            <div>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <div style={{ width: 240 }}>
                        <Sidenav defaultOpenKeys={['3', '4']}>
                            <Sidenav.Body>
                                <Nav activeKey="1">
                                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                        Dashboard
                                    </Nav.Item>
                                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                        All Truck
                                    </Nav.Item>
                                    <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                                        <Nav.Item eventKey="4-1">Add Users</Nav.Item>
                                        <Nav.Item eventKey="4-2">Change Permissions</Nav.Item>
                                    </Nav.Menu>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;