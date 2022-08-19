// import { getItems} from './greenkiosk.js';
// let fetch  = getItems()

let fetch = require("node-fetch")
// let fetch = require('./greenkiosk');
// let val  = fetch.getItems();

fetch('https://jsonplaceholder.typicode.com/products')
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
})
