// kullanici bilgisi varsa ekrana ismini yazdir

let username = prompt("Kullanici Adinizi Giriniz:")

if(username.length > 0){ //if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz ${username}`)
} else{
    console.log("bilgi yok")
}
