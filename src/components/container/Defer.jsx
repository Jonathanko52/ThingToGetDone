import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import DeferItem from './../presentational/deferItem.jsx'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const mapStateToProps = store => ({
    deferItBasket:store.CollectReducer.deferItBasket,
    calendarEvents: store.CollectReducer.calendarEvents
  });
  
  const mapDispatchToProps = dispatch => ({
    retrieveCalendar:(key)=>dispatch(actions.retrieveCalendar(key)),
    loadAuth:(key)=>dispatch(actions.loadAuth(key)),
    postEvent:(key)=>dispatch(actions.postEvent(key)),
    postEventToCalendar:(key)=>dispatch(actions.postEventToCalendar(key))

  });

class Defer extends React.Component {
    constructor(props) {
      super(props);
    }


  render(){
    const localizer = BigCalendar.momentLocalizer(moment) 
    let array=[];
    this.props.deferItBasket.forEach((cur,ind)=>{
        array.push(
            <DeferItem key={ind} item={cur.item} content={cur.content} postEventToCalendar={this.props.postEventToCalendar}/>
        )
    })
    let myEvents = this.props.calendarEvents

    return (<div className='col-sm-12 DeferItBox'>
        <h3>Defer it</h3>
        <BigCalendar
            style={{height: '800px'}}
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            
        />
        <button onClick={()=>{this.props.retrieveCalendar()}}>Load Calendar</button>
        <button onClick={()=>{this.props.postEvent()}}>Post Calendar</button>

          {array}
    </div>
    );
    }
}   
export default connect(mapStateToProps, mapDispatchToProps)(Defer);