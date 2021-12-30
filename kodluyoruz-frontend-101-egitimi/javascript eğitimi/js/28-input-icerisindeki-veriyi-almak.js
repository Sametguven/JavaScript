//INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefault()
    console.log("islem gerceklesti")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    //Bu bilgiyi aldıktan sonra localStorage'e eklerim.
}