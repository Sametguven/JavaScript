//localStorage Bolum Sonu Egzersizi
//Counter bilgisini Storage içinde tutalım ve Storage içinden bu bilgiyi alalım.
//Conuer'ın son değerini localStorage' e yazarak başlıyoruz
//Counter bilgisini number da tutmalıyız.

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
//localStorage den aldığım bilgi varsa git bunu number'a çevir yoksa 0 olsun.

let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase" ? counter +=1 : counter -=1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}

//Burada localStorage, sayfa yenilendiğinde counter 0 dan başlamasın
//kaldığı yerden devam etsin.Bu amaçla yapıldı.