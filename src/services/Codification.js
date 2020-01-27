const axios = require('axios');

export default class Codification {

    getAll() {
        return axios.get('https://jsonplaceholder.typicode.com/todos');
    }
    getById(id) {
        return axios.get('https://jsonplaceholder.typicode.com/todos/'+String(id));
    }

}