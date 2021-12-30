//Functions Bolum Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)

    this.id == "increase" ? counter +=1 : counter -=1
    counterDOM.innerHTML = counter

    //if'in 1.yazılış şekli
    // if(this.id == "increase") {//yani arttır butonu ise
    //     counterDOM.innerHTML = counter +=1
    // } else {
    //     counterDOM.innerHTML = counter -=1
    // }

    //if'in 2.yazılış şekli
    // this.id == "increase" ? counterDOM.innerHTML = counter +=1 : counterDom.innerHTML = counter -=1



}