//Template Literals Kullanımı ``
//Görevi birden fazla satır oluşturabilir ve içlerinde değişken ismi ${} ile kullanılır.
let userName = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN

console.log("Merhaba", userName, "sitemize hoşgeldin", "mail adresin:", email)

let info = `
Merhaba ${userName} sitemize hoşgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${userName[0]}.

`

console.log(info)