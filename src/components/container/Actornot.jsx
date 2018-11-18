import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'
import ActornotItem from '../presentational/actornotItem.jsx'


const mapStateToProps = store => ({
    collectionBasket:store.CollectReducer.collectionBasket
  });
  
  const mapDispatchToProps = dispatch => ({
    addCollectionItem:(item)=>dispatch(actions.addCollectionItem(item)),
    removeCollectionItem:(key)=>dispatch(actions.removeCollectionItem(key)),
    moveToActionable:(key)=>dispatch(actions.moveToActionable(key)),
    moveToNonActionable:(key)=>dispatch(actions.moveToNonActionable(key))
  });

class Actornot extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        let array=[];
        this.props.collectionBasket.forEach((cur,ind)=>{
            array.push(<ActornotItem 
                key={ind} 
                contents={cur.item} 
                removeItem={this.props.removeCollectionItem} 
                moveToActionable={this.props.moveToActionable}
                moveToNonActionable={this.props.moveToNonActionable}
            />)
        })
    

    return(
        <div className="ProcessTab">    
            <div className='col-sm-12 CollectionBasket'>
                {array}

            </div>
        </div>
    )
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Actornot);