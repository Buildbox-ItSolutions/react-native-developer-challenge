import Request from './Request';

export default class UserRequest extends Request {
    getUserList(){
        return this.request('/users');
    }
}