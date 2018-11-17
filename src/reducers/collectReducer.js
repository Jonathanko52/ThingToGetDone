import * as types from './../actionTypes.js'


const initialState = {
  boxDisplay:'meleeWeapon',
  loading: false,
  error: null,
  retrievedState: null,

}

function CollectReducer(state=initialState, action) {
    switch (action.type) {
      // case SET_VISIBILITY_FILTER:
      //   return action.filter
      default:
        return state
    }
  }

  export default CollectReducer;