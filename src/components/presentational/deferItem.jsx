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
            Year<input id='year' className='DeferItForm'></input>
            Month<input id='month' className='DeferItForm'></input>
            Day<input id='day' className='DeferItForm'></input>
            Hour<input id='hour' className='DeferItForm'></input>
            Minute<input id='minute' className='DeferItForm'></input>

            <br></br>
            <button className='DeferItFormButton btn btn-primary'type='submit'
            onClick={()=>{
              let eventObject = {}
              let year = document.getElementById('year').value
              let month = document.getElementById('month').value
              let day = document.getElementById('day').value
              let hour = document.getElementById('hour').value
              let minute = document.getElementById('minute').value
              eventObject.date = year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00"
              eventObject.item = props.item
              let arrayToString = array.toString()
              eventObject.content = arrayToString
              props.postEventToCalendar(eventObject)
            }}>Submit</button>
          </div>
      </div>
  );
}

export default DeferItem