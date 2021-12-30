//While Dongusu : Sonsuza kadar dönmesi gereken döngüler de kullanilir.
//For ile de yapilabilir ama while daha kullanislidir.

// let counter = 0;
// while ( counter < 10 ){
// console.log(counter)
// counter ++
// }

//kullanicinin ismini alana kadar islemim devam etsin istiyorum

let userName = ""

while (!userName) {
    userName = prompt("Kullanici Adini Giriniz: ")
    console.log(userName)
}
//while istedigi olana kadar devam eder
