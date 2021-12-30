//        DOM Icinden Oge Secimi

let title = document.querySelector('#title')
title.innerHTML = "Degisen Bilgi"//Bu kısım ise sonradan eklenip title değerini tamamen değiştiriyor.
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti" 
link.style.color = "red"
link.classList.add('btn')
