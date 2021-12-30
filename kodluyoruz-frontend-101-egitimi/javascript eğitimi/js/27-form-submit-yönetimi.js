//Form'umuz olsun, içerisinde de input elementimiz olsun ve bunun içersinde ki bilgiyi de alıp işlemeye çalışalım.
//Önce bootstrap de içerik eklemek istiyorum
//form gönderirken 2 tane yöntemimiz var.1.yöntem: method="GET"
//Gönder butonuna her tıkladığımızda sayfa yenileniyor.Bunu engelleyelim.

//FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {//event.preventDefault() sayesin de console da "islem gerceklesti" sabitledik.
    event.preventDefault()//default islemi engelledik...
    //islem gerceklesti hızlı bie sekilde gelip gidiyordu engelledik
    //artık o formda ki bilgiyi alıp,işleyebiliriz
    //default işlemi yapma.get ile birlikte olan işlemi yapma.
    //Bundan sonra form submit olduğunda git bu bilgiye bak ve düzenle diyebiliriz.
    //artık get parametreleri gelmiyor.
    console.log("islem gerceklesti")
}