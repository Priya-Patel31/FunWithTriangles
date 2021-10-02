var input1 = document.querySelector(".box1");
var input2 = document.querySelector(".box2");
var input3 = document.querySelector(".box3");
var btn = document.querySelector("#submit");
var form = document.getElementById("formTriangle");
var output = document.querySelector(".outputHere");
form.addEventListener("submit", event => {
    event.preventDefault();
  
    var sum = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
    if(sum === 180){
        output.innerText = "Yuhu! these angles can make a triangle";
    }else{
        output.innerText = "Oops! these angles cannot make a triangle";
    }
    
});


