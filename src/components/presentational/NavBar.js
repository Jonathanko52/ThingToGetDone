import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const NavBar = () => (
    <div className="col-sm-2 NavBar ">
        <ul>
          <li>
            <Link to="/collect">Collect</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
            <ul>
                <li><Link to="/process/actornot">First Sort</Link></li>
                <li><Link to="/process/nonact">NonActionable</Link></li>
                <li><Link to="/process/act">Actionable</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/organize">Organize</Link>
            <ul>
                <li><Link to="/organize/do">Do it?</Link></li>
                <li><Link to="/organize/delegate">Delegate it?</Link></li>
                <li><Link to="/organize/defer">Defer it?</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/review">Review</Link>
            <ul>
                <li><Link to="/review/bar">Bar</Link></li>
                <li><Link to="/review/line">Line</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/do">Do</Link>
          </li>
        </ul>

        
      </div>
);

export default NavBar;