//17-ternary-operator-ile-short-if-kullanimi

//eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

//ternary kullanimi:
//kosul ? dogruysa : yanli ssa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz bulunamadi :( "}`


// if(userName.length>0){
// console.log("basarili")

// }else{ console.log("basarisiz")


// }