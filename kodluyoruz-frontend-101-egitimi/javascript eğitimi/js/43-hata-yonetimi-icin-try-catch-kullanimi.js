//hata-yonetimi-icin-try-catch-kullanimi
let products

try{//Burada dene eger bir hata alırsan,bu hatayi da bana bildir  
    products.forEach(item => console.log(item))
} catch (error) {//burada error yerine başka isim de yazilabilir
console.log("error: ", error)
products = [1, 2, 3]
products.forEach(item => console.log(item))
}

console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)

