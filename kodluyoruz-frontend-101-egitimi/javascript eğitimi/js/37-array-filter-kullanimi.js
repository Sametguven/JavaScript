// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
//PRODUCTS' a git burada bir filtre uygula sonra bir fonksiyon calistir ve iceride bir kosul yaz.

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) 
console.log(NEW_PRODUCTS)
//item bir alias oluyor.

// aktif kullanicilar ??
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false}
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
//boolean sonucunu belirtmedigimiz surece true olarak calisan bir yapidir.
const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)

// 1- Yaşı 40 altında olan kişileri bulalım.
let yas40 = kisiler.filter( kisi => kisi.yas < 40 )
console.log(yas40)

let yas40 = kisiler.filter(kisi => kisi.yas < 40)
console.log(yas40)

// 2- Göz rengi ela olan kişileri bulalım.
let gozRengiEla = kisiler.filter( kisi => kisi.gozRengi === 'ela' )
console.log(gozRengiEla)

// 3- Tüm erkekler
let erkekler = kisiler.filter( kisi => kisi.cinsiyet === 'erkek' )
console.log(erkekler)

// 4- Tüm kadınlar
let kadinlar = kisiler.filter( kisi => kisi.cinsiyet === 'kadın' )
console.log(kadinlar)

// 5- Balıkesir'de yaşayanlar
let balikesir = kisiler.filter( kisi => kisi.sehir === 'Balıkesir' )
console.log(balikesir)

// 6- Kilosu 75'ten az olan kişiler
let kilo75 = kisiler.filter( kisi => kisi.kilo < 75 )
console.log(kilo75)
