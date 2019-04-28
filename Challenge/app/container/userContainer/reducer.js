import * as types from './types';

const INITIAL_STATE = {
    allUsers: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.ALL_USERS:
            return {...state, allUsers: action.payload}
        default:
            return state;
    }
}