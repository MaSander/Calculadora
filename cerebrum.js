var numbers = []
var commands = []
var result = 0

function func(event) {
    numbers[commands.length] = result = document.getElementById("input").value += event;
    console.log(numbers)
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
    console.log(commands)
}

function score() {
    numbers[numbers.length - 1] = numbers[numbers.length - 1] + "."
    console.log((numbers.length - 1) + " number in array")
    document.getElementById("input").value = numbers[numbers.length - 1]
}

function equal() {
    for(var i = 0; i < numbers.length; i++ ){
        switch (commands[i]){
            case "multiplicator":
                result = parseFloat(numbers[i]) * parseFloat(numbers[i + 1])
                break;
            case "subtract":
                result = parseFloat(numbers[i]) - parseFloat(numbers[i + 1])
                break;
            case "sum":
                result = parseFloat(numbers[i]) + parseFloat(numbers[i + 1])
                break;
            case "divide":
                result = parseFloat(numbers[i]) / parseFloat(numbers[i])
                break;
        }
    }
    document.getElementById("input").value = result
    numbers = [result]
    commands = []
}

function toClear() {
    document.getElementById("input").value = ""
    numbers = []
    commands = []
}