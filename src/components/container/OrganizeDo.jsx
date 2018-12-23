import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import OrganizeDoItem from './../presentational/organizeDoItem.jsx'


  const mapStateToProps = store => ({
    doItBasket:store.CollectReducer.doItBasket,
    timerValue:store.CollectReducer.timerValue
  });
  
  const mapDispatchToProps = dispatch => ({
    moveFromOrganizeToDoItLater:(key)=>dispatch(actions.moveFromOrganizeToDoItLater(key)),
    startTimer:(key)=>dispatch(actions.startTimer(key))

  });

class DoIt extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){

        let array=[];
        this.props.doItBasket.forEach((cur,ind)=>{
            if(cur.content){
                array.push(
                    <OrganizeDoItem key={ind} item={cur.item} content={cur.content} action={this.props.moveFromOrganizeToDoItLater}/>
                )
            } else {
            array.push(
                <OrganizeDoItem key={ind} item={cur.item} action={this.props.moveFromOrganizeToDoItLater}/>
            )}
        })



    
        return(
                <div className='col-sm-12 DoItBox'>
                    <h3>Do it!</h3>
                    <div className='DoItList col-sm-6'>
                        <h4>Do it Items</h4>
                        {array}
                    </div>
                    <div className='DoItItem col-sm-6'>
                        <h4>{this.props.timerValue}</h4>
                        <div className='DoItItemButtons'>
                            <button className="btn btn-primary" onClick={
                            ()=>{
                                let timerStarted = setInterval(
                                    ()=>{
                                    console.log(this.props.timerValue)
                                    this.props.startTimer(timerStarted)
                                },1000)
                                console.log("BUTTON PRESSED")
                                if(this.props.timerValue === 0){
                                    console.log('IF')
                                    clearInterval(timerStarted)
                                }
                                
                            }
                                }>Start</button>
                            <button className="btn btn-primary">Stop</button>
                        </div>
                    </div>
                 </div>)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoIt);