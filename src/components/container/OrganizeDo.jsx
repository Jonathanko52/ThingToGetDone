import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'


const mapStateToProps = store => ({
    doItBasket:store.CollectReducer.doItBasket
  });
  
  const mapDispatchToProps = dispatch => ({

  });

class DoIt extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){

        let array=[];
        let tempArray = [];
        this.props.doItBasket.forEach((cur,ind)=>{
            if(cur.content){
                tempArray = [];
                cur.content.forEach((cur2)=>{
                    tempArray.push(<li>{cur2}</li>)
                })
            }
            array.push(
                <div key={ind}>
                    <h4>{cur.item}</h4>
                    {tempArray}
                </div>
            )
        })
    
        return(
                <div className='col-sm-12 DoItBox'>
                    <h3>Do it!</h3>
                    <div className='DoItList col-sm-6'>
                        <h4>Do it Items</h4>
                        {array}
                        <div className='DoItItemButtons'>
                            <button className="btn btn-primary">Do it later</button>
                            <button className="btn btn-primary">Do it later</button>
                        </div>
                    </div>
                    <div className='DoItItem col-sm-6'>
                        <h4>2:00</h4>
                        <div className='DoItItemButtons'>
                            <button className="btn btn-primary">Start</button>
                            <button className="btn btn-primary">Stop</button>
                        </div>
                    </div>
                 </div>)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoIt);