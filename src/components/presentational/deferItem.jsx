import React from 'react';


const DeferItem = (props) => {

  let array=[];
  if(props.content){
    props.content.forEach((cur)=>{
      array.push(<li>{cur}</li>)
    })
  }


  return(


      <div className="form-group DeferItItem">
          <div>
            <h4>{props.item}</h4>
            {array}
          </div>
          <div className='DeferItItemBottom'>
            Year<input className='DeferItForm'></input>
            Month<input className='DeferItForm'></input>
            Day<input className='DeferItForm'></input>
            Hour<input className='DeferItForm'></input>
            Minute<input className='DeferItForm'></input>

            <br></br>
            <input className='DeferItFormButton btn btn-primary'type='submit'></input>
          </div>
      </div>
  );
}

                    export default DeferItem