import * as types from './../actionTypes.js'
const CLIENT_ID = '378958687274-a3mtd0dvan6i5g4b6h6i7t4so9lfrgb0.apps.googleusercontent.com'
const API_KEY = 'AIzaSyBb0YFWcBDP-_SIs7Go-KkLmr2jWGltbzw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CLIENT_ID}/events?key=${API_KEY}`


const initialState = {
  collectionBasket:[],
  nonActionableBasket:[],
  actionableBasket:[],
  actionableBasketItem:{},
  organizeBasket:[],
  doItBasket:[],
  doItNowBasket:[],
  delegateItBasket:[],
  deferItBasket:[],
  doItLaterBasket:[],
  calendarEvents:[],
  timerValue: 60,
  timerRunning: false,
  timerInterval: null,
}

function CollectReducer(state=initialState, action) {

  //COLLECT ACTIONS
    switch (action.type) {
    case types.ADD_COLLECTION_ITEM:
        let newCollectionBasket = state.collectionBasket.slice()
        let newItem = action.payload.item[0].toUpperCase() + action.payload.item.substring(1)
        alert("Item: '" + newItem + "' added to collection basket")
        newCollectionBasket.push({item:newItem})
      return{
        ...state,
        collectionBasket:newCollectionBasket
      }

    case types.REMOVE_COLLECTION_ITEM:
        newCollectionBasket = state.collectionBasket.slice()
        let deletedCollectionBasketItem = newCollectionBasket.splice(action.payload,1)
        alert("Item: '" + deletedCollectionBasketItem[0].item + "' deleted")

      return{
        ...state,
        collectionBasket:newCollectionBasket
      }
//PROCESS ACTIONS

    case types.MOVE_TO_ACTIONABLE:
        let newActionableBasket = state.actionableBasket.slice()
        newCollectionBasket = state.collectionBasket.slice()
        let newAction = newCollectionBasket.splice(action.payload,1)
        console.log('ACTION PAYLOAD', action.payload)
        newActionableBasket.push(newAction[0])
        console.log(newAction[0])
        alert("Item: '" + newAction[0].item + "' moved to Actionable Basket")


      return{
        ...state,
        actionableBasket:newActionableBasket,
        collectionBasket:newCollectionBasket

      }
    case types.MOVE_TO_NONACTIONABLE:
        let newNonActionableBasket = state.nonActionableBasket.slice()
        newCollectionBasket = state.collectionBasket.slice()
        let newNonAction = newCollectionBasket.splice(action.payload,1)
        newNonActionableBasket.push(newNonAction[0])
        alert("Item: '" + newNonAction[0].item + "' moved to Nonactionable Basket")


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
      newActionableBasketItem.content.push(action.payload[0].toUpperCase() + action.payload.substring(1))
      alert("Step: '" + action.payload[0].toUpperCase() + action.payload.substring(1) + "' added to task")

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
      alert("Task: '" + newActionableItem.item + "' moved to Do Basket")


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
      alert("Task: '" + newActionableItem.item + "' moved to Defer Basket")


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
      alert("Task: '" + newActionableItem.item + "' moved to Delegate Basket")


    return{
      ...state,
      actionableBasket:newActionableBasket,
      delegateItBasket: newDelegateItBasket,
      actionableBasketItem:{}
    }

//NONACTIONABLE
    case types.NONACTIONABLE_ELIMINATE:
      newNonActionableBasket = state.nonActionableBasket.slice()
      let nonActItemRemoved = newNonActionableBasket.splice(action.payload,1)
      alert("Task: '" + nonActItemRemoved[0].item + "' removed")


    return{
      ...state,
      nonActionableBasket:newNonActionableBasket
    }

//ORGANIZE TAB DO IT

      case types.MOVE_FROM_ORGANIZE_TO_DO_IT_LATER:
        newDoItBasket = state.doItBasket.slice()
        let newDoItLaterBasket = state.doItLaterBasket.slice()
        let newDoItLaterItem = newDoItBasket.splice(action.payload,1)
        newDoItLaterBasket.push(newDoItLaterItem[0])
        alert("Task: '" + newDoItLaterItem[0].item + "' mobed to Do it basket")

      return{
          ...state,
          doItBasket: newDoItBasket,
          doItLaterBasket: newDoItLaterBasket
      }
          
      case types.REMOVE_DO_IT_NOW_ITEM:
        console.log(action.payload)
        let newDoItNowBasket = state.doItBasket.slice()
        let removedItem = newDoItNowBasket.splice(action.payload,1)
        console.log(removedItem)
      return {
        ...state,
        doItBasket: newDoItNowBasket
      }


    
      case types.START_TIMER:
      let newTimerValue = state.timerValue
          newTimerValue--
          if(newTimerValue <= 0){
            console.log('INTERVAL CLEAR RUNNING', action.payload)
            clearInterval(action.payload)
            newTimerValue = 60
          }

        return{
          ...state,
          timerValue:newTimerValue,
          timerInterval:action.payload
        }
      case types.TOGGLE_TIMER_RUNNING_ON:
        
      return{
        ...state,
        timerRunning: true
      }

      case types.TOGGLE_TIMER_RUNNING_OFF:
      return{
        ...state,
        timerRunning: false
      }
        


    
      case types.PAUSE_TIMER:
        console.log('PAUSE TIMER RUN', state.timerInterval)
        clearInterval(state.timerInterval)
          

      return {
        ...state
      }
      case types.RESET_TIMER:

      return {
        ...state
      }



//DEFER IT
  case types.POST_CALENDAR_BEGIN:
  console.log('POST CALENDAR BEGIN')
  return{
    ...state
  }

  case types.POST_CALENDAR_SUCCESS:
  console.log('POST CALENDAR SUCCESS')
  return{
    ...state
  }

  case types.POST_CALENDAR_FAILURE:
  console.log('POST CALENDAR FAILURE')
  return{
    ...state
  }

      case types.LOAD_CALENDAR_SUCCESS:
      let newCalendarEvents = action.payload.events
      return{
        ...state,
        calendarEvents: newCalendarEvents
      }

      case types.LOAD_CALENDAR_BEGIN:
      console.log("Load Calendar Begun",action.payload)
      return{
        ...state
      }
      
      
      case types.LOAD_CALENDAR_FAILURE:
      console.log("Load Calendar fubar", action.payload)
      return{
        ...state
      }


//DO TAB

      case types.REMOVE_DO_ACTION:
        newDoItLaterBasket = state.doItLaterBasket.slice()
        let itemKey = action.payload[0]
        let contentKey = action.payload[1]
        newDoItLaterBasket[itemKey].content.splice(contentKey,1)
        if(newDoItLaterBasket[itemKey].content.length === 0){
          newDoItLaterBasket.splice(itemKey,1)
        }
      return{
        ...state,
        doItLaterBasket:newDoItLaterBasket
      }

      case types.REMOVE_DO_ITEM:
      return{
        ...state
      }



//DEFAULT CASE
      default:
        return state
    }
  }



  export default CollectReducer;