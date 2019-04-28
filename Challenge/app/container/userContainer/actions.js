import UserRequest from '../../requests/Users';
import * as types from './types';

export const allUsers = () => {

    let users = '';

    return(dispatch) => {
        const userStore = new UserRequest;
        userStore.getUserList()
            .then((response) => {
                users = response[0]
                dispatch({type: types.ALL_USERS, payload: users})
            })
    }
}