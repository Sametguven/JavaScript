// Array forEach Metotu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desltop PC", "Server", "Mouse", "Keyboard",[1,2,3]]

// PRODUCTS.forEach((product, index, array) =>  array[index] = product + "111" ) 
PRODUCTS.forEach((product, index, array) => {
     // array[index] = `${product.toUpperCase()} ${index}`

      console.log(product)
      } 
      )


      
//`${product}`
//console.log(PRODUCTS)

// const userListDOM = document.querySelector('#userList')

// for(index = 0; index < users.length; index++){
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM) 

///* const userListDOM = document.querySelector('#userList')
// PRODUCTS.forEach((item) => {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = item
//     userListDOM.append(liDOM)
// }) 
// */
//for dan farkı başlangıç,şart,artma şeklimiz yok

