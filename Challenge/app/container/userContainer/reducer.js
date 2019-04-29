import * as types from './types';

const INITIAL_STATE = {
    allUsers: [],
    details: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.ALL_USERS:
            return {...state, allUsers: action.payload}
        case types.USER_DETAILS:
            return {...state, details: action.payload}
        default:
            return state;
    }
}