import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DoIt from './OrganizeDo.jsx'
import Delegate from './Delegate.jsx'
import Defer from './Defer.jsx'



const Organize = () => (
    <div className="OrganizeTab">      
        <h1>Organize</h1>  
        <Route path="/organize/do" component={DoIt} />
        <Route path="/organize/delegate" component={Delegate} />
        <Route path="/organize/defer" component={Defer} />
    </div>
);

export default Organize