function generateCode(){
    let code = ' ';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (i =1; i <= 8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(){
    document.getElementById("submit").disabled = true;
}
disableButton();