import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import DeferItem from './../presentational/deferItem.jsx'


const mapStateToProps = store => ({
    deferItBasket:store.CollectReducer.deferItBasket
  });
  
  const mapDispatchToProps = dispatch => ({

  });

class Defer extends React.Component {
    constructor(props) {
      super(props);
    }

  render(){

    let array=[];
    this.props.deferItBasket.forEach((cur,ind)=>{
        array.push(
            <DeferItem key={ind} item={cur.item} content={cur.content} />
        )
    })

    return (<div className='col-sm-12 DeferItBox'>
        <h3>Defer it</h3>
          {array}
    </div>
    );
    }
}   
export default connect(mapStateToProps, mapDispatchToProps)(Defer);