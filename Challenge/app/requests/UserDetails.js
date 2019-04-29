import Request from './Request';

export default class UserDetailsRequest extends Request {
    getDetails(endpoint){
        const url = '/users/' + endpoint
        return this.request(url);
    }
}