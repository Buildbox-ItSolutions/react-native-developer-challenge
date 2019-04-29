import Request from './Request';

export default class UserRequest extends Request {

    getUserList(itemsPerPage){
        return this.request('/users?page=1&per_page=' + itemsPerPage);
    }
}