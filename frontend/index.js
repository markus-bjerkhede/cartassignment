// fetch('localhost:3000/api/cart')
//   .then(response => response.json())
//   .then(data => console.log(data));
// console.log(response)

var requestOptions = {
  method: 'GET',
};

fetch("localhost:3000/api/product", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));