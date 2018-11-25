import React from 'react';


const organizeDoNow = (props) => {

    let array=[];
    if(props.content){
      props.content.forEach((cur)=>{
        array.push(<li>{cur}</li>)
      })
    }
  
    // DeferItItem
    return(<div className='OrganizeDoNow'>
        <br></br>
        <br></br>
            <h4>{props.item}</h4>
            {array}
    {/* CollectionBasketButtons */}
        <div className='OrganizeDoButtons'>
            <button className="btn btn-primary" onClick={()=>{props.moveToActionable()}}>Do Now</button>
            <button className="btn btn-primary" onClick={()=>{props.moveToNonActionable()}}>Do Later</button>
        </div>
    </div>)

};

export default organizeDoNow