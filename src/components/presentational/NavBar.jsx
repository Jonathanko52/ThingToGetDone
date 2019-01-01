import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const NavBar = () => (
    <div className="col-sm-2 NavBar list-group">
          <div className='NavBarLinks'>
          <li className='list-group-item list-group-item-action'>
            <Link to="/">Login</Link>
          </li>
          <li className='list-group-item list-group-item-action'>
            <Link to="/collect">Collect</Link>
          </li>
          <li className='list-group-item list-group-item-action'>
            <Link to="/process">Process</Link>
                <li className='list-group-item list-group-item-action'><Link to="/process/">First Sort</Link></li>
                <li className='list-group-item list-group-item-action'><Link to="/process/nonact">NonActionable</Link></li>
                <li className='list-group-item list-group-item-action'><Link to="/process/act">Actionable</Link></li>
          </li>
          <li className='list-group-item list-group-item-action'>
            <Link to="/organize">Organize</Link>
                <li className='list-group-item list-group-item-action'><Link to="/organize/do">Do it?</Link></li>
                <li className='list-group-item list-group-item-action'><Link to="/organize/delegate">Delegate it?</Link></li>
                <li className='list-group-item list-group-item-action'><Link to="/organize/defer">Defer it?</Link></li>
          </li>
          <li className='list-group-item list-group-item-action'>
            <Link to="/review">Review</Link>
                <li className='list-group-item list-group-item-action'><Link to="/review/bar">Bar</Link></li>
                <li className='list-group-item list-group-item-action'><Link to="/review/line">Line</Link></li>
          </li>
          <li className='list-group-item list-group-item-action'>
            <Link to="/do">Do</Link>
          </li>
          </div>
        
      </div>
);

export default NavBar;