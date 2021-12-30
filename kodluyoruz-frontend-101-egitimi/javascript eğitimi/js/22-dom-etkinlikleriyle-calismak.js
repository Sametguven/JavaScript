//DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)//click  yerine mouseover özelliği de var.

function domClick() {
    console.log("tiklandi")
    this.style.color == "red" ? this.style.color = "black" :  this.style.color = "red"
}
