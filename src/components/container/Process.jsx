import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Actornot from './actornot.jsx'
import Act from './act.jsx'
import Nonact from './nonact.jsx'


const Process = () => (
    <div className="ProcessTab">      
        <h1>Process</h1>  
        <Route exact path="/process/" component={Actornot} />
        <Route path="/process/nonact" component={Nonact} />
        <Route path="/process/act" component={Act} />
    </div>
);

export default Process