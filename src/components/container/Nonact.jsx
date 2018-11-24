import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import NonActItem from '../presentational/nonactItem.jsx'


const mapStateToProps = store => ({
    nonActionableBasket:store.CollectReducer.nonActionableBasket
  });
  
  const mapDispatchToProps = dispatch => ({
    nonActionableEliminate:(key)=>dispatch(actions.nonActionableEliminate(key))
  });

class NonAct extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        let array=[];

        this.props.nonActionableBasket.forEach((cur,ind)=>{
                array.push(<NonActItem key={ind} main={cur.item} eliminate={this.props.nonActionableEliminate}/>)
        })
    
        return(
        <div className="ProcessTab">
            <div className='col-sm-12 NonActionable'>
                <h3>NonActionable?</h3>
                {array}
            </div>
        </div>);
        }}
        

        export default connect(mapStateToProps, mapDispatchToProps)(NonAct);