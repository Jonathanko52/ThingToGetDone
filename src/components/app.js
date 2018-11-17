import React from 'react';
import '../assets/css/app.css';
import NavBar from './presentational/NavBar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Collect from './container/Collect.js'
import Process from './container/Process.js'
import Organize from './container/Organize.js'
import Review from './container/Review.js'
import Do from './container/Do.js'



const App = () => (
    <div className='container-fluid'>
        <div className="app">
            <div className="row top-bar" >
                <h1>Getting Things Done</h1>
            </div>
            <Router>
                <div className="row no-gutters main-page">
                    <NavBar />
                    <div className="col-sm-10">
                            <Route exact path="/collect" component={Collect} />
                            <Route path="/process" component={Process} />
                            <Route path="/organize" component={Organize} />
                                {/* <Route path="/do" component={Actornot} />
                                <Route path="/delegate" component={Nonact} />
                                <Route path="/defer" component={Act} /> */}
                            <Route path="/review" component={Review} />
                            <Route path="/do" component={Do} />
                    </div>
                </div>
            </Router>
        </div>
    </div>
);

export default App;
