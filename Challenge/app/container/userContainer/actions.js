import UserRequest from '../../requests/Users';
import UserDetailsRequest from '../../requests/UserDetails';
import * as types from './types';

export const allUsers = (itemsPerPage) => {

    let users = [];

    return(dispatch) => {
        const userStore = new UserRequest;
        userStore.getUserList(itemsPerPage)
            .then((response) => {
                users = response
                dispatch({type: types.ALL_USERS, payload: users})
            })
    }
}

export const userDetails = (user) => {

    return(dispatch) => {
        const userDetails = new UserDetailsRequest;
        userDetails.getDetails(user)
            .then((response) => {
                details = response
                dispatch({type: types.USER_DETAILS, payload: details})
            })
    }
}