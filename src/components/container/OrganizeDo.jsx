import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import OrganizeDoItem from './../presentational/organizeDoItem.jsx'
import OrganizeDoNow from './../presentational/organizeDoItem.jsx'
import { throws } from 'assert';


  const mapStateToProps = store => ({
    doItBasket:store.CollectReducer.doItBasket,
    timerValue:store.CollectReducer.timerValue,
    timerRunning:store.CollectReducer.timerRunning
  });
  
  const mapDispatchToProps = dispatch => ({
    moveFromOrganizeToDoItLater:(key)=>dispatch(actions.moveFromOrganizeToDoItLater(key)),
    startTimer:(key)=>dispatch(actions.startTimer(key)),
    toggleTimerRunnerOn: (item)=> dispatch(actions.toggleTimerRunnerOn(item)),
    toggleTimerRunnerOff: (item)=> dispatch(actions.toggleTimerRunnerOff(item)),
    pauseTimer:(key)=>dispatch(actions.pauseTimer(key)),
    removeDoItNowItem:(key)=>dispatch(actions.removeDoItNowItem(key))
  });

class DoIt extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){

        let array=[];
        let array2=[];
        this.props.doItBasket.forEach((cur,ind)=>{
            if(cur.content){
                array.push(
                    <OrganizeDoItem 
                        key={ind} 
                        item={cur.item}
                        ind={ind} 
                        content={cur.content} 
                        moveToTimer={this.props.moveToTimer} 
                        removeDoItNowItem={this.props.removeDoItNowItem} 
                        moveFromOrganizeToDoItLater={this.props.moveFromOrganizeToDoItLater}/>
                )
            } else {
            array.push(
                <OrganizeDoItem 
                    key={ind} 
                    item={cur.item} 
                    ind={ind}
                    action={this.props.moveFromOrganizeToDoItLater} 
                    removeDoItNowItem={this.props.removeDoItNowItem}/>
            )}
        })
        let timerStarted
        let timeValueInMinutes
        let timeValueInSeconds
        if(this.props.timerValue >= 60){
            timeValueInMinutes = Math.round(this.props.timerValue/60)
            timeValueInSeconds = this.props.timerValue - (timeValueInMinutes * 60)
        } else {
            timeValueInMinutes = 0;
            timeValueInSeconds = this.props.timerValue
        }
    
        return(
                <div className='col-sm-12 DoItBox'>
                    <h3>Do it!</h3>
                    <div className='DoItList col-sm-6'>
                        <h4>Do it Items</h4>
                        {array}
                    </div>
                    <div className='DoItItem col-sm-6'>
                        <h4>{timeValueInMinutes}:{timeValueInSeconds}</h4>
                        <div className='DoItItemButtons'>
                            <button className="btn btn-primary" onClick={
                            ()=>{   
                                if(this.props.timerRunning === false){
                                    this.props.toggleTimerRunnerOn()
                                    console.log('SETTING INTERVALS')
                                    timerStarted = setInterval(
                                        ()=>{
                                        console.log(this.props.timerValue)
                                        this.props.startTimer(timerStarted)
                                    },1000)
                                    timerRunning = setTimeout(()=>{this.props.toggleTimerRunnerOff()
                                    }, this.props.timerValue*1000);    
                                } else {
                                    console.log('TIMER ALREADY RUNNING')
                                }   
                            }
                                }>Start</button>
                            <button className="btn btn-primary" onClick={
                            ()=>{
                                console.log("PAUSE BUTTON PRESSED")
                                this.props.pauseTimer(timerStarted)
                                this.props.toggleTimerRunnerOff()
                            }
                                }>Pause</button>
                            <button className="btn btn-primary" onClick={
                            ()=>{
                                console.log("RESET BUTTON PRESSED")
                                clearInterval(timerStarted)
                            }
                                }>Reset</button>
                        </div>
                    </div>
                 </div>)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoIt);