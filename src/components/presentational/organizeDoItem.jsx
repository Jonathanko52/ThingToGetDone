import React from 'react';


const organizeDoItem = (props) => {

    let array=[];
    if(props.content){
      props.content.forEach((cur)=>{
        array.push(<li className='OrganizeDoItemLine'>{cur}</li>)
      })
    }
  
    return(<div className='OrganizeDoItem'>
        <br></br>
        <br></br>
            <h4>{props.item}</h4>
            {array}
        <div className='OrganizeDoButtons'>
            <button className="btn btn-primary" onClick={()=>{props.moveToActionable()}}>Do Now</button>
            <button className="btn btn-primary" onClick={()=>{props.action()}}>Do Later</button>
        </div>
    </div>)

};

export default organizeDoItem