const display = document.querySelector('.display')
const circle = document.querySelector('.circle')


function showBtn(btn){
    display.innerHTML += btn 
}

function result(){
    display.innerHTML = eval(display.innerHTML)
}

function reset(){
    display.innerHTML = ""
}

function del(){
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1)
}

