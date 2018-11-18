import * as types from './../actionTypes.js'


const initialState = {
  collectionBasket:[],
  nonActionableBasket:[],
  actionableBasket:[],
  organizeBaskter:[],
  doItBasket:[],
  delegateItBasket:[],
  deferItBasker:[],
  doItLost:[]
}

function CollectReducer(state=initialState, action) {
    switch (action.type) {
    case types.ADD_COLLECTION_ITEM:
        let newCollectionBasket = state.collectionBasket.slice()
        newCollectionBasket.push(action.payload)
      return{
        ...state,
        collectionBasket:newCollectionBasket
      }

    case types.REMOVE_COLLECTION_ITEM:
        newCollectionBasket = state.collectionBasket.slice()
        newCollectionBasket.splice(action.payload,1)
      return{
        ...state,
        collectionBasket:newCollectionBasket
      }

    case types.MOVE_TO_ACTIONABLE:
        let newActionableBasket = state.actionableBasket.slice()
        newActionableBasket.push(action.payload,1)
        newCollectionBasket = state.collectionBasket.slice()
        newCollectionBasket.splice(action.payload,1)

      return{
        ...state,
        actionableBasket:newActionableBasket,
        collectionBasket:newCollectionBasket

      }

    case types.MOVE_TO_NONACTIONABLE:
        let newNonActionableBasket = state.nonActionableBasket.slice()
        newNonActionableBasket.push(action.payload,1)
        newCollectionBasket = state.collectionBasket.slice()
        newCollectionBasket.splice(action.payload,1)

      return{
        ...state,
        nonActionableBasket:newNonActionableBasket,
        collectionBasket:newCollectionBasket

      }

      default:
        return state
    }
  }

  export default CollectReducer;