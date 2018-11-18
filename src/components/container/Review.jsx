import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bar from '../presentational/bar.jsx'
import Line from '../presentational/line.jsx'


const Review = () => (
    <div className="ReviewTab">      
        <h1>Review</h1>  
        <Route path="/review/bar" component={Bar} />
        <Route path="/review/line" component={Line} />
    </div>
);

export default Review