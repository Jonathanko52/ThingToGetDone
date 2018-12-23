import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js'


const mapStateToProps = store => ({

  });
  
  const mapDispatchToProps = dispatch => ({
    loadGoogleClient:(key)=>dispatch(actions.loadGoogleClient(key)),
    initGoogleClient:(key)=>dispatch(actions.initGoogleClient(key)),
  });

class Login extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        //
        this.props.loadGoogleClient()
        //
        return(
            <div className='LoginTab'>
                <div className='LoginPage col-sm-12'>
                    <div className='LoginBox'>
                            <br></br>
                            <h4>Login</h4>
                        <div className='LoginButtons'>
                            <br></br>
                                Username: <input className='DeferItForm'></input>
                                <br></br>
                                <br></br>

                                Password: <input className='DeferItForm'></input>
                                <br></br>
                                <br></br>

                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>

                    <div className='LoginBox'>
                            <br></br>
                            <h4>Google Authentication</h4>
                            <br></br>
                        <div className='CollectionBasketButtons'>
                            <button className="btn btn-primary"
                                    onClick={()=>{
                                        console.log('thset')
                                        this.props.initGoogleClient()
                                    }}
                            >Authenticate</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);