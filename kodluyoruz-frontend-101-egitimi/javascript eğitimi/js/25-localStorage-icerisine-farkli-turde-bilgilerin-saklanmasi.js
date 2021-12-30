// Local Storage Islemleri:
//Önce stringe çevirmeliyiz bunun için de JSON.stringify kullanırız.
//Sonra metinsel ifadeyi de tekrar JSON.parse ile alabiliyorum.
let user = {userName: "hakanyalcinkaya", isActive:true}//Bu kompleks bir bilgi
console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))
//JSON.stringify olmadigi zaman sonuc object oluyor.

let userInfo = localStorage.getItem('userInfo')//bilgiyi al
userInfo=JSON.parse(userInfo)
console.log(userInfo)
//JSON.stringify ile içerisinde ki bilgileri obje olarak değilde string olarak yazmasını istiyoruz.
 