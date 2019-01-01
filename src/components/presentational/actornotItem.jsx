import React from 'react';


const ActornotItem = (props) => (

            <div className='CollectionBasketItem'>
                <br></br>
                <br></br>
                    <h4>{props.contents}</h4>
                <div className='CollectionBasketButtons'>
                    <button className="btn btn-primary" onClick={()=>{props.moveToActionable(props.ind)}}>Actionable</button>
                    <button className="btn btn-primary" onClick={()=>{props.moveToNonActionable(props.ind)}}>UnActionable</button>
                    <button className="btn btn-primary" onClick={()=>{props.removeItem(props.ind)}}>Delete</button>
                </div>
            </div>

);

export default ActornotItem