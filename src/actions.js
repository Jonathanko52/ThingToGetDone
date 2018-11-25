import * as types from './actionTypes.js';

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

//ORGANIZE TAB DELEGATE

//ORGANIZE TAB DEFER

//DO TAB
export const removeDoAction = (keyArray) =>({
    type:types.REMOVE_DO_ACTION,
    payload: keyArray
})

export const removeDoItem = (item )=>({
    type:types.REMOVE_DO_ITEM,
    payload: item
})