var input1 =document.querySelector(".ow");
var input2 =document.querySelector(".ow1");
var btn = document.querySelector("#submit");
var output = document.querySelector(".output");
var form = document.getElementById("formHyp");



form.addEventListener("submit",(event) =>{
    event.preventDefault();

    // console.log(output);
    // var formData = new FormData(form);

    // if(formData.values() === "1"){
        var sum =  parseInt(input1.value * input1.value) + parseInt(input2.value * input2.value);
       
        output.innerText = (Math.sqrt(sum)).toFixed(6) ;
    // }else{

    // }
});