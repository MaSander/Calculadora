var currentHistory
var history = []
var comandsHistory = []

function func(event) {
    var store = document.getElementById("input").value
    currentHistory = document.getElementById("input").value = store + event
}

function sum() {
    
}

function subtract() {

}

function multiplicator() {

}

function comma() {

}

function equal() {
    alert(currentHistory)
}

function clear() {
    currentHistory = null
    document.getElementById("input").innerHTML = ''
}