const axios = require('axios');

export default class Codification {

    getAll() {
        return axios.get('https://jsonplaceholder.typicode.com/todos');
    }

}