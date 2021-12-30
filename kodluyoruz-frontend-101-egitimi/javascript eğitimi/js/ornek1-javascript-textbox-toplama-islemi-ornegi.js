let sayi1 = document.querySelector("#sayi1")
let sayi2 = document.querySelector("#sayi2")
let btn = document.querySelector("#btn")
let sonuc = document.querySelector("#sonuc")

btn.onclick = function (event) {// event burada sonucun ekranda sürekli gösterilmesini sağlar.
    event.preventDefault()
    let toplam = Number(sayi1.value) + Number(sayi2.value)
    sonuc.innerHTML = toplam
}