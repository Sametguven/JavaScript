// Break & Continue
// https://www.w3schools.com/js/js_break.asp
//Continue: devam et, Break: islemi durdurur

const LOREM_LIST = [
   'lorem','ipsum','dolor','amet','cpnsectetur','adipisicing','elit'
]

let counter = 0

// for (; counter < 10; counter++) { 
//     console.log(counter)
//     if (counter === 5) {break} //console' a göre 5'in dahil olup olmaması degisiyor
//break console dan önce olursa 5 dahil değil, sonra olursa 5 dahil
// }

// for (; counter < 10; counter++) { 
//     if (counter === 5) {continue}// 5'i atladı
//     console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

// let index = 0

// for(; index < LOREM_LIST.length; index++){
// if(LOREM_LIST[index] == "dolor") {break}
// const LI_DOM = document.createElement('li')
// LI_DOM.innerHTML = LOREM_LIST[index]
// UL_DOM.append(LI_DOM)
// }

for( index = 0; index < LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor") {continue}
    const LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
    }