var currentHistory
var numbers = []
var commands = []

function func(event) {
    numbers[0] = document.getElementById("input").value += event;
    console.log(numbers);
    console.log(numbers.length);
    console.log(commands.length);
}

function ops(event) {
    if(numbers.length == commands.length){
        commands[commands.length] = event;
        return;
    }
    commands[commands.length] = event;
    console.log(commands);
}

function comma() {
    //insert comma in number
}

function equal() {
    for(var item in history){
        console.log(commandsHistory)
    }
}

function clear() {
    currentHistory = null
    document.getElementById("input").innerHTML = ''
}