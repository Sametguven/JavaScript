// number veri türü tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Orani",  tax,
    "KDV Tutari", priceTax,
    "Fiyat: ", total
)
//arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter ++;
console.log(counter)

counter --;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

//işlem önceliği
console.log( 2 + 3 * 10 )
console.log( (2 + 3) * 10 )

//mod(kalan) alma % :
//sayi tek mi cift mi
 console.log(17 % 2)

 //8 urun alan koliye tum urunler sigiyor mu
console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

//us alma ** :
console.log(2 * 2 * 2 * 2 )
console.log(2 ** 4)

//asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama: ", Math.floor(1.95)) // ->1
console.log("Asagi Yuvarlama: ", Math.floor(1.95))

//yukari yuvarlama islemi -> Math.ceil:
console.log("Yukari Yuvarlama: ", Math.ceil(1.1))  // ->2

//yakina yuvarlama islemi -> Math.round:
console.log("Yakina yuvarlama: ", Math.round(1.4) ) //1.4->1, 1.5->2

let stringNumber = "11"
console.log(stringNumber)

let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gönderildi: ", Number("111"))
//ileri de daha detaylı anlatılacak