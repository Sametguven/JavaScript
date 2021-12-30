// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//array olusturdugumuz da aslinda object den turetildigini unutmamaliyiz
let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

// Object olusturmak
let item3 = {}
let item4 = new Object()

console.log("object1", object1)

//Mesela arrayObj 0.index 1 ama ben 1'e index ile ulaşmak istemiyorum.
//Bir isim vermek istiyorum,ismi verdikten sonra da o bilgiye ulaşmak istiyorsam
//Burada object yardimci oluyor.key-value ilislisi

//-----------------------------------------------------------------------------------
let arac = {
    marka: "Renault", 
    model: "Clio", 
    yil: "2018", 
    renk: "beyaz", 
    yakit: "Dizel",
    saatUcreti: 60
}

document.getElementById("bilgi").innerHTML = 
arac.marka + " " + arac.model + " model " + arac.yakit + " " + "araci saatlik kiralama"
//-----------------------------------------------------------------------------------

let personel = {
    name:"Ahmet",
    age: 25
}
console.log(personel.name)
console.log(personel.age)
//-----------------------------------------------------------------------------------
let personell = {
    name:"Ahmet",
    age: 25
}
console.log(personel["name"])
console.log(personel["age"])
//-------------------------------------------------------------------

//Bir Nesnenin Bir Özelliğini Silme
//delete: mahalle özelligini adres nesneden kaldirmak icin kullanilir.
// delete adres.mahalle
//-------------------------------------------------------------------

//Bir Özelliğin Var Olup Olmadığını Kontrol Etme
//in operatörünü kullaniriz
 let araba = {
    name:"BMW", 
    model:"2010", 
    renk:"siyah"
}

console.log("fren" in araba)
console.log("renk" in araba)
//-----------------------------------------------------------------------

