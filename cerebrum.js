var numbers = []
var commands = []
var result = 0

function func(event) {
    numbers[commands.length] = result = document.getElementById("input").value += event;
}

function operations(event) {
    if(commands.length == numbers.length){
        commands[commands.length - 1] = event;
    }
    else
    {
        commands[commands.length] = event;
    }
    document.getElementById("input").value = ""
}

function score() {
    numbers[numbers.length - 1] = numbers[numbers.length - 1] + "."
    document.getElementById("input").value = numbers[numbers.length - 1]
}

function equal() {

    var numberQnt = numbers.length
    
    for(var i = 0; i < numberQnt; i++ ){
        var first = numbers[0]

        if(numbers.length != 1) numbers.shift()

        switch (commands[i]){
            case "multiplicator":
                numbers[0] = parseFloat(first) * parseFloat(numbers[0])
                break;
            case "subtract":
                numbers[0] = parseFloat(first) - parseFloat(numbers[0])
                break;
            case "sum":
                numbers[0] = parseFloat(first) + parseFloat(numbers[0])
                break;
            case "divide":
                numbers[0] = parseFloat(first) / parseFloat(numbers[0])
                break;
        }

    }

    document.getElementById("input").value = numbers[0]
    commands = []
}

function toClear() {
    document.getElementById("input").value = ""
    numbers = []
    commands = []
}