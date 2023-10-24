function askName() {

    let name = document.getElementById('name').value

    if (name == '') {
        document.getElementById('error').innerText = 'Error, enter your name'
        return
    }

    str = `Hi, ${name}`

    document.getElementById('result').innerText = str
    
}

function divide()
{
    let x = document.getElementById("num1").value
    let y = document.getElementById("num2").value

    let rezult = x / y

    if (y==0){
        document.getElementById("rezultdiv").value = "На ноль делить нельзя"
        return
    }

    document.getElementById("rezultdiv").value = rezult

}
