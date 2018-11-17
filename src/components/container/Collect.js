import React from 'react';


const Collect = () => (
    <div className="row CollectTab">
    <div className="col-sm-6 CollectTextForm">
        <div className="form-group">
            <h3>Input Task</h3>
            <textarea className="form-control" rows="4" id="TaskCollection"></textarea>
            <input type="submit" className="btn btn-primary TaskCollectionButton" value="Submit"></input>
        </div>
    </div>
    <div className="col-sm-6 CollectedList">

    </div>
  </div>
);

export default Collect