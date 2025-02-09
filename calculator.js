//Calculator JS
const display = document.getElementById("display");
console.log(display.value )
function appendToDisplay(Input){
    console.log(Input)
    display.value += Input;

}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value)
}
