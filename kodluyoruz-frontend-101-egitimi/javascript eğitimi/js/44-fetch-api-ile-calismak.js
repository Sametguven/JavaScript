// fetch-api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//Bir veri sunucudan geldkiten sonra islem yapabilmek

//JSON Dosyadan veri cekmek:
// fetch("data/settings.json").then(
//     response => {
//         return response.json()
//     }
// ).then(responseJson => {
//     console.log(responseJson)
//     console.log(responseJson.userName)
// })


let userListDom = document.querySelector("#userList")


//API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item =>{
        let liDom = document.createElement("li")
        liDom.innerHTML = item.title
        userListDom.append(liDom)

    })
})
