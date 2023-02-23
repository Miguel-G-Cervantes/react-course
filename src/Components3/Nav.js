import Nav from 'react-bootstrap/Nav';
import { TaskContext } from '../Context/TaskContext';
import { useContext } from 'react';

export function Navbar(){
  
    return (
        <Nav fill variant="tabs" className="justify-content-end" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/All">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
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
    );
  }