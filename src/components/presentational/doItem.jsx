import React from 'react';


const DoItem = (props) => {
    let array = [];
    props.content.forEach((cur,ind)=>{
        array.push(<li key={ind} contentKey={ind} 
            className='TaskAction'>{cur}
            <button className='btn btn-primary' 
            onClick={()=>{props.removeDoAction([props.itemKey,ind])}}>
            Done</button></li>)
    })

    return(
    <tr>
        <td>
        <h5 className='Task'>{props.item}</h5>
            <ol>
                {array}
            </ol> 
        </td>
    </tr>
)};

export default DoItem