import React from 'react';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NavSection = () => {
    return ( 
        <Nav fill variant="tabs" defaultActiveKey="/hypertension" >
        <Nav.Item>
          <Nav.Link as={Link} to="/hypertension"  eventKey="link-2"> <span className="h2"> Hypertension Calculator </span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/kidney" eventKey="link-1"><span className="h2"> Kidney Calculator </span></Nav.Link>
        </Nav.Item>
      </Nav>
     );
}
 
export default NavSection;