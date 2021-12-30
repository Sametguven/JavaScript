// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: item,
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }

// })
// console.log(USERS_OBJ)
// return ile {} kullanma sebebim bunun bir object oldugunu belirtmek.

const USERS_OBJ = USERS.map(item => {
    return {
        userName: item,
        shortName: `${item[0]}.`,
        newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }

})
console.log(USERS_OBJ)
// ------------------------------------------------------------
let sayilar = [1, 4, 5, 8, 10]

let yeniDizi = sayilar.map(function (deger) {
    return deger * 5
})

console.log(yeniDizi.toString())

//-------------------------------------------------------------
//2500 doğru ise 1.05 yanlış ise 1.10
let maaslar = [2750, 3250, 2400, 2200, 2600, 4000, 2100] 
let a = maaslar.map(function(deger) {
    if (deger>2500) {
        return deger * 1.05
    }else{
        return deger * 1.10
    }
}

)
console.log(a.toString())
//-------------------------------------------------------------

let sayilarrr = [2, 4, 5, 7, 8, 9]
let yeni = sayilarrr.map(function (deger,index) {
    if (index % 2 == 0) {
        return Math.pow(deger,2) //deger**2
    }else{
        return Math.pow(deger,3) //deger**3
    }
})
console.log(yeni.toString())
