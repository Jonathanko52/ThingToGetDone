import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'


const mapStateToProps = store => ({
    collectionBasket:store.CollectReducer.collectionBasket
  });
  
  const mapDispatchToProps = dispatch => ({
    addCollectionItem:(item)=>dispatch(actions.addCollectionItem(item)),
    removeCollectionItem:(key)=>dispatch(actions.removeCollectionItem(key))
  });

  class Collect extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        let array=[];
        this.props.collectionBasket.forEach((cur,ind)=>{
            array.push(<li key={ind}>{cur.item}<button onClick={()=>{this.props.removeCollectionItem(ind)}}></button></li>)
        })
        return(
        <div className="row CollectTab">
            <div className="col-sm-6 CollectTextForm">
                <form className="form-group" onSubmit={(event)=>{
                    event.preventDefault()
                    this.props.addCollectionItem({
                        item:document.getElementById('TaskCollection').value
                    
                    })
                    document.getElementById('TaskCollection').value ='';
                    }}>
                    <h3>Input Task</h3>
                    <textarea className="form-control" rows="4" id="TaskCollection"></textarea>
                    <input type="submit" className="btn btn-primary TaskCollectionButton" value="Submit"></input>
                </form>
            </div>
            <div className="col-sm-6 CollectedList">
                {array}
            </div>
        </div>)
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Collect);