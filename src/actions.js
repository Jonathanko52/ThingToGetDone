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