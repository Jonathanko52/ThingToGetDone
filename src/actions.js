import * as types from './actionTypes.js';

export const addCollectionItem = (item) =>({
    type:types.ADD_COLLECTION_ITEM,
    payload: item
})

export const removeCollectionItem = (key) =>({
    type:types.REMOVE_COLLECTION_ITEM,
    payload: key
})

export const moveToActionable = (key) =>({
    type:types.MOVE_TO_ACTIONABLE,
    payload: key
})

export const moveToNonActionable = (key) =>({
    type:types.MOVE_TO_NONACTIONABLE,
    payload: key
})

//ACTIONABLE


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




//NONACTIONABLE
export const nonActionableEliminate = (item) =>({
    type:types.NONACTIONABLE_ELIMINATE,
    payload: item
})
