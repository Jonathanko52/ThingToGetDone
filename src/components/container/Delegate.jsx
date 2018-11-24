import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import DelegateItem from './../presentational/delegateItem.jsx'


const mapStateToProps = store => ({
    delegateItBasket:store.CollectReducer.delegateItBasket
  });
  
  const mapDispatchToProps = dispatch => ({

  });

class Delegate extends React.Component {
    constructor(props) {
      super(props);
    }

  render(){

    let array=[];
    this.props.delegateItBasket.forEach((cur,ind)=>{
        array.push(
            <DelegateItem key={ind} item={cur.item} content={cur.content} />
        )
    })

    return(
    <div className="DelegateItBox col-sm-12">
        <h3 className="align-middle ">Delegate It</h3>
        {array}
    </div>
    );
}
}   
export default connect(mapStateToProps, mapDispatchToProps)(Delegate);