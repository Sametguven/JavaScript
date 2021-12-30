//Arrow Function Kullanimi
//NOT: => fat arrow fonksiyonu  
//1.yol
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("JavaScript")

const HELLO = (firstname) => {console.log(`Merhaba ${firstname}`)}
HELLO("samed")
//-----------------------arrow function----------------------------
//2.yol
//arrow function'a dönüştüreceğiz
//function'ı burada const diye yazdık
// =>(fat arrow) ile bunun bir fonksiyon işlemi olduğunu belirtip

const HELLO_FUNC_V1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
//NOT:Return ile console.log(`Merhaba ${firstName}`) aynı
//NOT: => fat arrow fonksiyonu
HELLO_FUNC_V1("HELLO_FUNC_V1")
//-----------------------------------------------------------------
//3.yol:1 tane parametre ve 1 tane işlem olduğu için {} kullanmadık

const HELLO_FUNC_V2 = firstName => console.log(`Merhaba ${firstName}`)//Bir parametre ve bir geri dönüş varsa bu şekilde yazılır.Bu yüzden süslü parantez yok
HELLO_FUNC_V2("HELLO_FUNC_V2")
//-----------------------------------------------------------------
//4.yol: Birden fazla parametre varsa ve() var, tek bir işlem varsa {} kullanmak zorunda değilim.

const HELLO_FUNC_V3 = (firstName, lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)

HELLO_FUNC_V3("HELLO_FUNC_V3", "Last Name info")
//-----------------------------------------------------------------
//5.yol:Birden fazla değişken var ve Birden fazla işlem olduğundan dolayı {} kullanılır.
//Hem console'a yazdırmak istiyorum hem de return etmek istiyorum

const HELLO_FUNC_V4 = (firstName, lastName) => {
let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info
}
HELLO_FUNC_V4("HELLO_FUNC_V4","Other Info")
// Ödev aynı yapppppppppp...