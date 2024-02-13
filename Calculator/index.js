var input =document.getElementById("inputBox");
var calc=document.getElementById("calc");
calc.addEventListener("click",function(a){
    buttonClick(a.target.id);
})
var calcu=document.getElementById("button=");
calcu.addEventListener("click",calculate);
var C=document.getElementById("buttonC");
C.addEventListener("click",erase);

function buttonClick(buttonId){
    if((buttonId!="buttonC") && (buttonId!="button="))
    {
        var button=document.getElementById(buttonId);
        var b=buttonId;
        b=b.replace("button","");
        entries(b);
    }
}
function entries(b){
    input.value +=b;
}
function calculate(){
    if(input.value == ".")
    {
        alert("Please Enter Right No")
    }
    input.value =eval(input.value)
}
function erase(){
    input.value ="";
}
