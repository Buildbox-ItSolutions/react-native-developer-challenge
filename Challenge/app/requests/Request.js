import axios from 'axios';

export default class Request {

    constructor(){
        host = 'https://api.github.com' 
    }

    request(endpoint){
        const url = host + endpoint
        axios.get(url)
            .then((response) => {
                console.log(response.data);
            })
    }
}