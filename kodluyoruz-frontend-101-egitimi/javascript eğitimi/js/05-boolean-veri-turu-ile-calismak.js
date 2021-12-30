// 0 ve 1'i Anlamak

let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;  //userName değeri olmadığı için sonucu: false
let isUserName = Boolean(userName)
console.log(isUserName)

console.log(Boolean("11")) //true
console.log(Boolean("0")) //true
console.log(Boolean("")) //false

userName = "user"
console.log("User Name:", Boolean(userName)) 
//userName' in verisi olduğu için sonuç true

//0 , -0, null, false, NaN, undefined, ("") ->

console.log(Boolean(0)) //sıfır da değer yok bu yüzden false
console.log(Boolean(-0)) //sıfır da değer yok bu yüzden false
console.log(Boolean(-0.1)) //eksi de değer var bu yüzden true
//Boolean sıfır dışında sayı verildiğin de true çalışır.

console.log(Boolean(0 === 0))//ARAŞTIRRRRRRRRRRRRRR
//Not: Karar yapilari kisminda tekrar anlatilacak
console.log(Boolean(userName.length > 0))

//Not:Boolean yapısın da değişkene isim verirken is yada has kullanırız.