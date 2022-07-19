let screenValue = ""

function getValue(item)//get the value of a button and print it on the calculator screen
{ 
    const val = document.getElementById(item).value
    const text = document.getElementById("numbers")
    if(val === "reset")
    {
        text.innerHTML = ""
        screenValue = ""
        return
    }
    if(val === 'del')
    {
        screenValue = screenValue.slice(0, -1)
        text.innerHTML = screenValue
        return
    }
    text.innerHTML = screenValue + val
    screenValue += val
}

function calculate() // calculate the operation on the screen
{
    const text = document.getElementById("numbers")
    const result = eval(screenValue)
    text.innerHTML = result
    screenValue = ""
}