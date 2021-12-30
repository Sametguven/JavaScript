// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir
//Not:default parametre ="" 
let firstName = "Lorem" //

function greetings(firstName="", lastName="") {//firstName :Parametre olmazsa değişkenin değerini alıyor
   console.log(`Merhaba ${firstName}`)
   console.log(`Merhaba ${firstName} ${lastName}`) //Burada firstName deger aldi.lastName degeri yok
}
 
console.log(firstName)  //degisken

greetings()  
greetings("Parametre","samed")
//------------------------------------------------------------------------------

function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info //return: bilginin dışarıya aktarılması anlamına geliyor.return ile bilgiyi döndermiş
}

let greetingsInfo = greetings2("Ad" , "Soyad" )
// let info = "deneme" // ?????
console.log(greetingsInfo)

//------------------------------------------------------------------------------
//2 parametre: Nereye gitmek istediğimi bulsun.istediğim bilgiyi de onun içerisine göndersin

 
function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color Reddddddddd</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem","Ipsum"))

