import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Doit from './../presentational/do.js'
import Delegate from './../presentational/delegate.js'
import Defer from './../presentational/defer.js'



const Organize = () => (
    <div className="OrganizeTab">      
        <h1>Organize</h1>  
        <Route path="/organize/do" component={Doit} />
        <Route path="/organize/delegate" component={Delegate} />
        <Route path="/organize/defer" component={Defer} />
    </div>
);

export default Organize