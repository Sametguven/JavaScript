//liste icerisindeki son elemana ulasmak veya eleman eklemek

let lastChild = document.querySelector("ul#list>li:last-child") //listede ki son elemanı aldık
lastChild.innerHTML = "son oge degisti..."
//last-child: son eleman, first child: ilk eleman
let firstChild = document.querySelector("ul#list>li:first-child") //listede ki ilk elemanı aldık
firstChild.innerHTML = "ilk oge degisti..."

// console.log(item)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) Elemanı en sona ekler
ulDOM.prepend(liDOM) //Elemanı en başa ekler
//--------------------------------------------------------------------------------------------------
