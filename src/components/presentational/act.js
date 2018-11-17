import React from 'react';


const Act = () => (
<div className="ProcessTab">
    <div className='col-sm-6 ActionableList'>
        <h3>Actionable List</h3>

        
    </div>
    <div className='col-sm-6 Actionable'>
        <div className="form-group AddPlan">
                <label className="align-middle">What's the next step for this action?</label>
                <textarea className="form-control AddPlanInput" rows="7" id="AddPlan"></textarea>
                <input type="submit" className="btn btn-primary AddPlanInputButton" value="Submit"></input>   
                <br></br>
                <div className='ActionNextButtons'>                
                    <button className="btn btn-primary">Do it</button>
                    <button className="btn btn-primary">Defer it</button>
                    <button className="btn btn-primary">Delegate it</button>
                </div> 
        </div>
    </div>
</div>
);

export default Act