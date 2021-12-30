// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDOM = document.querySelector('#userform')
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if(USER_NAME.value && SCORE.value){
    addItem(USER_NAME.value, SCORE.value) //gonderdikten sonra sifirlandi
    USER_NAME.value = ""
    SCORE.value = ""
    }else{
        console.log('hatalı giris')
    }
}


let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between',
        'align-items-center')
    userListDOM.append(liDOM)
}