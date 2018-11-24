import React from 'react';


const NonactItem = (props) => (

    <div className='NonActionableItem'>
        <h4>{props.main}</h4>
        <div className='NonActionableButtons'>
            <button className="btn btn-primary" onClick={()=>{props.eliminate(props.key)}}>
                Eliminate 
            </button>
            <button className="btn btn-primary">
                Store for Incubation
            </button>
            <button className="btn btn-primary">
                Store For Reference
            </button>
        </div>
    </div>

);

export default NonactItem