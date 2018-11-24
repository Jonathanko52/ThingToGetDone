import * as types from './../actionTypes.js'


const initialState = {
  collectionBasket:[],
  nonActionableBasket:[],
  actionableBasket:[],
  actionableBasketItem:{},
  organizeBasket:[],
  doItBasket:[],
  delegateItBasket:[],
  deferItBasket:[],
  doItLatterBasket:[]
}

function CollectReducer(state=initialState, action) {

  //COLLECT ACTIONS
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
        newCollectionBasket = state.collectionBasket.slice()
        let newAction = newCollectionBasket.splice(action.payload,1)
        newActionableBasket.push(newAction[0])

      return{
        ...state,
        actionableBasket:newActionableBasket,
        collectionBasket:newCollectionBasket

      }
//PROCESS ACTIONS
    case types.MOVE_TO_NONACTIONABLE:
        let newNonActionableBasket = state.nonActionableBasket.slice()
        newCollectionBasket = state.collectionBasket.slice()
        let newNonAction = newCollectionBasket.splice(action.payload,1)
        newNonActionableBasket.push(newNonAction[0])

      return{
        ...state,
        nonActionableBasket:newNonActionableBasket,
        collectionBasket:newCollectionBasket

      }
//ACTIONABLE 
    case types.CHANGE_ACTIONABLE_ITEM:
      let newActionableBasketItem = JSON.parse(JSON.stringify(state.actionableBasketItem))
      newActionableBasketItem.item = action.payload
      newActionableBasketItem.content = [];
    return{
      ...state,
      actionableBasketItem:newActionableBasketItem
    }

    case types.CHANGE_ACTIONABLE_CONTENT:
      newActionableBasketItem = JSON.parse(JSON.stringify(state.actionableBasketItem))
      newActionableBasketItem.content.push(action.payload)
    return{
      ...state,
      actionableBasketItem: newActionableBasketItem
    }

    case types.MOVE_ACTION_TO_DO:
    newActionableBasket = state.actionableBasket.slice()
    let newDoItBasket = state.doItBasket.slice()
    let newActionableItem = JSON.parse(JSON.stringify(state.actionableBasketItem))
    newDoItBasket.push(newActionableItem)
    newActionableBasket.shift()

    return{
      ...state,
      actionableBasket:newActionableBasket,
      doItBasket: newDoItBasket,
      actionableBasketItem:{}
    }

    case types.MOVE_ACTION_TO_DEFER:
    newActionableBasket = state.actionableBasket.slice()
    let newDeferItBasket = state.deferItBasket.slice()
    newActionableItem = JSON.parse(JSON.stringify(state.actionableBasketItem))
    newDeferItBasket.push(newActionableItem)
    newActionableBasket.shift()

    return{
      ...state,
      actionableBasket:newActionableBasket,
      deferItBasket: newDeferItBasket,
      actionableBasketItem:{}
    }

    case types.MOVE_ACTION_TO_DELEGATE:
    newActionableBasket = state.actionableBasket.slice()
    let newDelegateItBasket = state.delegateItBasket.slice()
    newActionableItem = JSON.parse(JSON.stringify(state.actionableBasketItem))
    newDelegateItBasket.push(newActionableItem)
    newActionableBasket.shift()

    return{
      ...state,
      actionableBasket:newActionableBasket,
      delegateItBasket: newDelegateItBasket,
      actionableBasketItem:{}
    }

    // const initialState = {
    //   collectionBasket:[],
    //   nonActionableBasket:[],
    //   actionableBasket:[],
    //   actionableBasketItem:{},
    //   organizeBasket:[],
    //   doItBasket:[],
    //   delegateItBasket:[],
    //   deferItBasket:[],
    //   doItLatterBasket:[]
    // }


//NONACTIONABLE
    case types.NONACTIONABLE_ELIMINATE:
    newNonActionableBasket = state.nonActionableBasket.slice()
    newNonActionableBasket.splice(action.payload,1)
    return{
    ...state,
    nonActionableBasket:newNonActionableBasket
    }


      default:
        return state
    }
  }

  export default CollectReducer;