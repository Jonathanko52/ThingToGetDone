import * as types from './actionTypes.js';
import fetch from 'cross-fetch';
import moment from "moment";
const CALENDAR_ID = 'rbus2ih1t35gj1kcdghh66uj10@group.calendar.google.com'
const CLIENT_ID = '378958687274-a3mtd0dvan6i5g4b6h6i7t4so9lfrgb0.apps.googleusercontent.com'
const API_KEY = 'AIzaSyBb0YFWcBDP-_SIs7Go-KkLmr2jWGltbzw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
var GoogleAuth;


//LOGIN TAB ACTIONS

export const loadGoogleClient = () => {
    return (dispatch)=>{
        console.log('loadGoogleClient run in actions')
        gapi.load('client:auth2', initGoogleClient);
    }
}

export const initGoogleClient = () =>{
    return (dispatch)=>{

            gapi.client.init({
                'apiKey': API_KEY,
                'clientId': CLIENT_ID,
                'scope': 'https://www.googleapis.com/auth/calendar',
                'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
            }).then(function () {
                console.log('SO FAR SO GOOD')
                GoogleAuth = gapi.auth2.getAuthInstance();
        
                // Listen for sign-in state changes.
                GoogleAuth.signIn()
            });
        
    }
}


//COLLECT TAB ACTIONS
export const addCollectionItem = (item) =>({
    type:types.ADD_COLLECTION_ITEM,
    payload: item
})

export const removeCollectionItem = (key) =>({
    type:types.REMOVE_COLLECTION_ITEM,
    payload: key
})

//PROCESS TAB FIRST SORT ACTIONS
export const moveToActionable = (key) =>({
    type:types.MOVE_TO_ACTIONABLE,
    payload: key
})

export const moveToNonActionable = (key) =>({
    type:types.MOVE_TO_NONACTIONABLE,
    payload: key
})

//PROCESS TAB ACTIONABLE ACTIONS


export const changeActionableItem = (item) =>({
    type:types.CHANGE_ACTIONABLE_ITEM,
    payload: item
})

export const changeActionableContent = (item) =>({
    type:types.CHANGE_ACTIONABLE_CONTENT,
    payload: item
})

export const moveActionToDo = (item) => ({
    type:types.MOVE_ACTION_TO_DO,
    payload: item
})
export const moveActionToDefer = (item) => ({
    type:types.MOVE_ACTION_TO_DEFER,
    payload: item
})
export const moveActionToDelegate = (item) => ({
    type:types.MOVE_ACTION_TO_DELEGATE,
    payload: item
})




//PROCESS TABLE NONACTIONABLE ACTIONS
export const nonActionableEliminate = (item) =>({
    type:types.NONACTIONABLE_ELIMINATE,
    payload: item
})

//ORGANIZE TAB DO

export const moveFromOrganizeToDoItNow = (item) =>({
    type:types.MOVE_FROM_ORGANIZE_TO_DO_IT_NOW,
    payload: item
})

export const moveFromOrganizeToDoItLater = (item) =>({
    type:types.MOVE_FROM_ORGANIZE_TO_DO_IT_LATER,
    payload: item
})

export const removeDoItNowItem = (item) => ({
    type: types.REMOVE_DO_IT_NOW_ITEM,
    payload: item
})

export const startTimer = (item) =>({
    type: types.START_TIMER,
    payload: item
})

export const toggleTimerRunnerOn = (item) =>({
    type: types.TOGGLE_TIMER_RUNNING_ON,
    payload: item
})

export const toggleTimerRunnerOff = (item) =>({
    type: types.TOGGLE_TIMER_RUNNING_OFF,
    payload: item
})

export const pauseTimer = (item) =>({
    type: types.PAUSE_TIMER,
    payload:item
})
export const resetTimer = () => ({
    type: types.RESET_TIMER,
    payload: item
})



//ORGANIZE TAB DELEGATE

//ORGANIZE TAB DEFER
export const loadAuth = (key)=>({
    type:types.LOAD_AUTH,
    payload:key
})

export function postEventToCalendar(ItemAndDate){
    console.log(ItemAndDate, 'POST EVENT')
    return (dispatch)=>{
        dispatch(postCalendarBegin(true))
        function postToCalendar(){
            gapi.client.init({
                'apiKey': API_KEY,
                'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                'clientId': CLIENT_ID,
                'scope': 'https://www.googleapis.com/auth/calendar',
            }).then(()=>{
                let request = gapi.client.calendar.events.insert({
                    'calendarId': CALENDAR_ID,
                    'resource':{
                        'summary':ItemAndDate.item,
                        'description':ItemAndDate.content,
                        'start':{
                            'dateTime':ItemAndDate.date,
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                          'dateTime': ItemAndDate.date,
                          'timeZone': 'America/Los_Angeles'
                        },
                    },
                })
                request.execute(function(event) {
                    console.log("EVENT",event);
                    console.log("EVENT.DATA",event.data);
    
                });
            }).then((response) => {
                console.log('POST EVENT RESPONSE')
                dispatch(postCalendarSuccess(true))
            }, function(reason) {
                dispatch(postCalendarFailure(true))
                console.log('Reasons',reason);
            }).catch((error)=>{
                console.log("PROMISE ERROR", error)
            })
        }
        gapi.load('client', postToCalendar)
        }
    }

export function postEvent(){
return (dispatch)=>{
    dispatch(postCalendarBegin(true))
    function post(){
        console.log("POST INITIATED")
        gapi.client.init({
            'apiKey': API_KEY,
            'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            'clientId': CLIENT_ID,
            'scope': 'https://www.googleapis.com/auth/calendar',
        }).then(()=>{
            console.log("POST SECOND STEP")
            let request = gapi.client.calendar.events.insert({
                'calendarId': CALENDAR_ID,
                'resource': {
                    'summary': 'Google I/O 2015',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2018-12-29T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': '2018-12-29T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                  }
            })
            request.execute(function(event) {
                console.log("EVENT",event);
                console.log("EVENT.DATA",event.data);

            });
        }).then((response) => {
            console.log('POST EVENT RESPONSE')
            dispatch(postCalendarSuccess(true))
        }, function(reason) {
            dispatch(postCalendarFailure(true))
            console.log('Reasons',reason);
        }).catch((error)=>{
            console.log("PROMISE ERROR", error)
        })
    }
    gapi.load('client', post)
    }
}

const postCalendarBegin = () => ({
    type: types.POST_CALENDAR_BEGIN
  });
  
  const postCalendarSuccess = (events) => ({
    type: types.POST_CALENDAR_SUCCESS,
    payload:{events}
  });
  
  const postCalendarFailure = error => ({
    type: types.POST_CALENDAR_FAILURE,
    payload: {
      error
    }
  });

export function retrieveCalendar(){
    return (dispatch)=>{
        dispatch(loadCalendarBegin(true))

        function retrieve(){
            gapi.client.init({
                'apiKey': API_KEY
            }).then(()=>{
                console.log('RETRIEVE SECOND STEP')
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`
                })
            }).then((response) => {
                console.log("RETRIEVED")
                let  events = []
                response.result.items.map((event) => {
                            events.push({
                              start: event.start.date || event.start.dateTime,
                              end: event.end.date || event.end.dateTime,
                              title: event.summary,
                            })
                })
                dispatch(loadCalendarSuccess(events))
                
            }, function(reason) {
                console.log('Reasons',reason);
            })
        }
        gapi.load('client', retrieve)
    }
}

  const loadCalendarBegin = () => ({
    type: types.LOAD_CALENDAR_BEGIN
  });
  
  const loadCalendarSuccess = (events) => ({
    type: types.LOAD_CALENDAR_SUCCESS,
    payload:{events}
  });
  
  const loadCalendarFailure = error => ({
    type: types.LOAD_CALENDAR_FAILURE,
    payload: {
      error
    }
  });

//DO TAB
export const removeDoAction = (keyArray) =>({
    type:types.REMOVE_DO_ACTION,
    payload: keyArray
})

export const removeDoItem = (item )=>({
    type:types.REMOVE_DO_ITEM,
    payload: item
})