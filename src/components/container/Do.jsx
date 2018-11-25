import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import DoItem from './../presentational/doItem.jsx'


const mapStateToProps = store => ({
    doItLaterBasket:store.CollectReducer.doItLaterBasket
  });
  
  const mapDispatchToProps = dispatch => ({
    removeDoAction:(key)=>dispatch(actions.removeDoAction(key))
  });

class Do extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){

        let array = [];
        this.props.doItLaterBasket.forEach((cur,ind)=>{
            array.push(<DoItem key={ind} itemKey={ind} item={cur.item} content={cur.content} removeDoAction={this.props.removeDoAction}/>)
        })

    return(
    <div className='DoTab'>
    <div className='TodayTasks col-sm-6'>
        <h3 className="align-middle">Today Tasks</h3>
        <table className='table Tables'>
            {array}
        </table>
    </div>
    <div className='TasksFromCalendar col-sm-6'>
            <h3 className="align-middle">Calendar Tasks</h3>
            <table className='table Tables'>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 className='Task'>Sample Item</h5>
                                <ol>
                                <li className='TaskAction'>Action 1 <button className='btn btn-primary '>Done</button></li>
                                <li className='TaskAction'>Action 2 <button className='btn btn-primary '>Done</button></li>
                                <li className='TaskAction'>Extra Action <button className='btn btn-primary '>Done</button></li>
                                </ol> 
                            </td>
                        </tr>
                        <tr>
                                <td>
                                    <h5 className='Task'>Sample Item</h5>
                                    <ol>
                                    <li className='TaskAction'>Action 1 <button className='btn btn-primary '>Done</button></li>
                                    <li className='TaskAction'>Action 2 <button className='btn btn-primary '>Done</button></li>
                                    <li className='TaskAction'>Extra Action <button className='btn btn-primary '>Done</button></li>
                                    </ol> 
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    <h5 className='Task'>Sample Item</h5>
                                    <ol>
                                    <li className='TaskAction'>Action 1 <button className='btn btn-primary '>Done</button></li>
                                    <li className='TaskAction'>Action 2 <button className='btn btn-primary '>Done</button></li>
                                    <li className='TaskAction'>Extra Action <button className='btn btn-primary '>Done</button></li>
                                    </ol> 
                                </td>
                            </tr>
                            <tr>
                                    <td>
                                        <h5 className='Task'>Sample Item</h5>
                                        <ol>
                                        <li className='TaskAction'>Action 1 <button className='btn btn-primary '>Done</button></li>
                                        <li className='TaskAction'>Action 2 <button className='btn btn-primary '>Done</button></li>
                                        <li className='TaskAction'>Extra Action <button className='btn btn-primary '>Done</button></li>
                                        </ol> 
                                    </td>
                                </tr>
                    </tbody>

            </table>

    </div>
</div>);
}}

export default connect(mapStateToProps, mapDispatchToProps)(Do);