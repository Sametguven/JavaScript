// camelCase Kullanimi
let kodluyoruzserverinfo = ""  //yanlış
let fullName = "" //Doğru.Çünkü : isimlendirmede sadece ilk kelimenin ilk harfi küçük diğer kelimelerin ilk harfi büyük

// UPPER_CASE Kullanimi:
const password = "1234" // Bu doğru kullanım değil
const PASSWORD = "1234" // Bu doğru kullanım

//Sabit olacak bilgileri yani const' ları BÜYÜK HARFLER ile tanımlarız.
//Kolay okunabilmesi içinde 2 kelime arsında alt çizgi_ kullanılır.

const SERVER_PASSWORD = "1234"

// Degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = "Türkçe" //bu doğru kullanım değil
//değişken isimlerimiz sadece ingilizce olmalı

//Anlamsız değişken adları kullanmayın
let x = 1; //bu doğru kullanım değil
// x,y,z,k,i,e gibi anlamsız değişken isimleri kullanma.Herkesin anlayabileceği değişken isimleri ver.

//Boolean tanımlarken is/has kullanimi
let isActive = true
let hasPassword = false
//is ve has görünce boolean olduğunu anlamalıyız

//Line Length < 80 : Satır uzunluğu 80 karakteri geçmemeli.
//Bu kural sadece değişken tanımlarken değil,kodda hep kulllanılır.
//Herkesin ekran boyutu farklı olduğu için ve herkesin kodu rahatlıkla okuması
//bizim kod kalitemizi gösterir.