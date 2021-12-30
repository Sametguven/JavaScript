//array - dizilerle calismak

//Array olusturmak 
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // bos list

//Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length //array icindeki oge sayisini ogrenmek
)
// document.querySelector('#info').innerHTML = items.length

//Array icindeki ilk elemanin cagirilmasi
console.log( items[0] )

//Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki :",
    items[Math.floor(items.length/2)]
)

//Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1])
//Diziler de length eleman sayısını alır ama diziler index üzerinden calisir.Bu yüzden son elemana yani index ulasmak icin length -1 denir. 

//degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof(items) //object olarak cıktı veriyor
)

console.log(
    Array.isArray(items)
)
// hangileri isArray => True verir ?

console.log("[] : ", Array.isArray( [] ) )
console.log("1 : ", Array.isArray( 1 ) )
console.log("true : ", Array.isArray( true ) )
