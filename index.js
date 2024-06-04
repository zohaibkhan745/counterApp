let countEl = document.getElementById("num")
// console.log(countEl)
let count=0
function increment (){
    count++
    countEl.innerText=count
}
function restart ()
{
    count = 0
    countEl.innerText=count
}