import axios from 'axios';

export default class Request {

    constructor(){
        host = 'https://api.github.com' 
    }

    request(endpoint){
        const url = host + endpoint

        return new Promise((resolve, reject) => {
            axios.get(url)
            .then((response) => {
                console.log(response.data);
                if (typeof response.data.success !== 'undefined') {
                    if (response.data.success) {
                      return resolve(response.data);
                    }
        
                    return reject(response.data);
                  }
        
                  return resolve(response.data);
            })
        })
        
    }
}