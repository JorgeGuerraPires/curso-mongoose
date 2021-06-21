//functions.js
const axios = require('axios');

const functions = {
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')

}

module.exports = functions;


