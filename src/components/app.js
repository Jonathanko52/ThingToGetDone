import React from 'react';
import '../assets/css/app.css';
import NavBar from './presentational/NavBar.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Collect from './container/Collect.jsx'
import Process from './container/Process.jsx'
import Organize from './container/Organize.jsx'
import Review from './container/Review.jsx'
import Do from './container/Do.jsx'
import Login from './container/Login.jsx'



const App = () => (
    <Router>

    <div className='container-fluid'>
        <div className="app">
        
            <div className="row top-bar" >
                <h1>Getting Things Done</h1>
            </div>
                <div className="row no-gutters main-page">
                    <NavBar />
                    <div className="col-sm-10">
                            <Route path="/collect" component={Collect} />
                            <Route exact path='/' component={Login} />
                            <Route path="/process" component={Process} />
                            <Route path="/organize" component={Organize} />
                            <Route path="/review" component={Review} />
                            <Route path="/do" component={Do} />
                    </div>
                </div>
        </div>
    </div>
                </Router>

);

export default App;
