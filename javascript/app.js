//знакомимся на странице чата

function askName() {

    let name = document.getElementById('name').value

    if (name == '') {
        document.getElementById('error').innerText = 'Error, enter your name'
        return
    }

    str = `Hi, ${name}`

    document.getElementById('result').innerText = str
    
}


//калькулятор

function divide()
{
    let x = document.getElementById("num1").value
    let y = document.getElementById("num2").value

    let rezult = x / y

    if (y==0){
        document.getElementById("rezult").value = "На ноль делить нельзя"
        return
    }

    document.getElementById("rezult").value = rezult

}

function multiply()
{
    let x = document.getElementById("num1").value
    let y = document.getElementById("num2").value

    let rezult = x * y

    document.getElementById("rezult").value = rezult

}

function sum()
{
    //let x = document.getElementById("num1").value
    //let y = document.getElementById("num2").value

    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);

    let rezult = x + y

    document.getElementById("rezult").value = rezult

}

function subtract()
{
    let x = document.getElementById("num1").value
    let y = document.getElementById("num2").value

    let rezult = x - y

    document.getElementById("rezult").value = rezult

}
