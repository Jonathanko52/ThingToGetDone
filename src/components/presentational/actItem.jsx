import React from 'react';


const ActItem = (props) => {
    let array = []
    if(props.sub){
        props.sub.forEach((cur,ind)=>{
            array.push(<li key='ind'>{cur}</li>)
        })
    }
    
    return(
        <div className='col-sm-6 ActionableItem'>
        <h4>{props.main}</h4>
            <ul> 
                {array}
            </ul>
        </div>
    )
};

export default ActItem


