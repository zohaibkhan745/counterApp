let countEl = document.getElementById("num")
let saveEl = document.getElementById("save-el")
let restartEl = document.getElementById("restart-el")

let count=0
function increment (){
    count++
    countEl.textContent=count
}
function save ()
{
    let countstr =count + " - "
    saveEl.textContent += countstr
}
function restart ()
{
    count=0
    countEl.textContent=0
    saveEl.textContent = "Previous entires:"
}