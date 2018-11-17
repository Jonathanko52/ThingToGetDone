import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Actornot from './../presentational/actornot.js'
import Act from './../presentational/act.js'
import Nonact from './../presentational/nonact.js'


const Process = () => (
    <div className="ProcessTab">      
        <h1>Process</h1>  
        <Route path="/process/actornot" component={Actornot} />
        <Route path="/process/nonact" component={Nonact} />
        <Route path="/process/act" component={Act} />
    </div>
);

export default Process