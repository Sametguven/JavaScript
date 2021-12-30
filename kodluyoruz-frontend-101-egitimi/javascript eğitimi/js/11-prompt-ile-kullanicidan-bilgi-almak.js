// prompt ile Kullanicidan Bilgi Almak

//let fullName = "" Buna ben bir bilgi atıyorum ama prompt kullanırsam
 let fullName = prompt("Lutfen Adinizi Giriniz: ") //Direk içerisine bilgi alabiliyorum
 
 let greeting = document.querySelector("#greeting")
  
 greeting.innerHTML = `${greeting.innerHTML} <small style = "color:red">${fullName}</small> `
