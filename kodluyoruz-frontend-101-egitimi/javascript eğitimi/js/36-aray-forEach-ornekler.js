let numbers = [1,2,3,4,5]
let sum = 0
for(let i = 0; i<numbers.length; i++){
 sum+=numbers[i]
}
console.log(sum)

let sayilar = [1,2,3,4,5]
let a = 0
sayilar.forEach(function (number) {
    a += number;
})
console.log(a)

let arr = ['a','b','c','d','e']
arr.forEach(
    function(elem,index){
        console.log(`${elem} ${index}`)

    }
)