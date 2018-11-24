import React from 'react';


const DelegateItem = (props) => {

  let array=[];
  if(props.content){
    props.content.forEach((cur)=>{
      array.push(<li>{cur}</li>)
    })
  }

  return(

                        <div className="form-group DelegateItItem">
                            <h4>{props.item}</h4>
                            {array}
                            <div className='DelegateItItemBottom'>
                                <input className='DelegateItForm' value='Contact Name'></input>
                                <br></br>
                                <input className='DelegateItForm' value='Email'></input>
                                <br></br>
                                <input className='DelegateItForm' value='Phone'></input>
                                <br></br>
                                <input className='DelegateItFormButton btn btn-primary'type='submit'></input>
                            </div>    
                        </div>

 );
}

export default DelegateItem