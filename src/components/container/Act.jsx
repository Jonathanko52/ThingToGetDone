import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import ActItem from '../presentational/actItem.jsx'


const mapStateToProps = store => ({
    actionableBasket:store.CollectReducer.actionableBasket,
    actionableBasketItem:store.CollectReducer.actionableBasketItem
  });
  
  const mapDispatchToProps = dispatch => ({
      changeActionItem:(item)=>dispatch(actions.changeActionableItem(item)),
      changeActionableContent:(item)=>dispatch(actions.changeActionableContent(item)),
      moveActionToDo:(key)=>dispatch(actions.moveActionToDo(key)),
      moveActionToDefer:(key)=>dispatch(actions.moveActionToDefer(key)),
      moveActionToDelegate:(key)=>dispatch(actions.moveActionToDelegate(key)),

  });

class Act extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        let array=[];
        if(this.props.actionableBasket.length > 0){
            if(this.props.actionableBasketItem.item !== this.props.actionableBasket[0].item){
                this.props.changeActionItem(this.props.actionableBasket[0].item)
            }
            if(this.props.actionableBasket.length >=1){
                array.push(<ActItem 
                    main={this.props.actionableBasketItem.item}
                    sub={this.props.actionableBasketItem.content}
                    />)
            }
            this.props.actionableBasket.forEach((cur,ind)=>{
                if(ind >= 1){
                    array.push(<ul
                        key={ind}> 
                        {cur.item}
                        </ul>)
                }
            })
        }
    
        return(
            <div className="ProcessTab">
                <div className='col-sm-6 ActionableList'>
                    <h3>Actionable List</h3>
                    {array}
                    
                </div>
                <div className='col-sm-6 Actionable'>
                    <div className="form-group AddPlan">
                            <label className="align-middle">What's the next step for this action?</label>
                            <textarea className="form-control AddPlanInput" rows="7" id="AddPlan"></textarea>
                            <button className="btn btn-primary AddPlanInputButton" onClick={
                                ()=>{
                                    this.props.changeActionableContent(
                                        document.getElementById('AddPlan').value
                                    )
                                    document.getElementById('AddPlan').value ='';
                                }
                            }>Submit</button>   
                            <br></br>
                            <div className='ActionNextButtons'>                
                                <button className="btn btn-primary" onClick={
                                    ()=>{
                                    console.log('Invoking move action to do')
                                    this.props.moveActionToDo()
                                    }}>Do it</button>
                                <button className="btn btn-primary" onClick={
                                    ()=>{
                                    this.props.moveActionToDefer()
                                    }}>Defer it</button>
                                <button className="btn btn-primary" onClick={
                                    ()=>{
                                    this.props.moveActionToDelegate()
                                    }}>Delegate it</button>
                            </div> 
                    </div>
                </div>
            </div>)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Act);