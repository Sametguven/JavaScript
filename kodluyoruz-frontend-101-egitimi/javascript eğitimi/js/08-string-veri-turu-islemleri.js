let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

//string karakter sayisi -> length 
console.log(email.length)

//ILK Karakteri Bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String icinde istedigimiz bilgiyi aramak ve yerini bulmak ->search:
console.log(email.search("@"))
//email içerisinde olmayan bir harf,karakter aradığımızda SONUÇ -1 dir.
console.log(email[15])

//Belli bir yerden sonrasını al ->slice : (domain bilgisi)

let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) //sadece gmail kısmını aldık
)

// bilgiyi değiştir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//istediğim bilgi var mi? -> includes:

//cevabı true yada false olur
//email = email.includes('@') // true
// console.log(email)

//istedigim bilgiyle basladi mi ? bitti mi ->startsWidth, endsWidth
console.log( email.endsWith("kodluyoruz.org") );

//Ilk harflerini büyük yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].
toUpperCase()}${lastName.slice(1).toLowerCase()} `
console.log(fullName)