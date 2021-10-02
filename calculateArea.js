var result1 = document.querySelector(".or1");
var result2 = document.querySelector(".or2");
var base1 = document.querySelector(".box11");
var height1 = document.querySelector(".box21");
var a = document.querySelector(".box12");
var b = document.querySelector(".box22");
var c = document.querySelector(".box32");
var btn = document.querySelector("#cal2");

    
document.forms[0].addEventListener("submit",(event) =>{
        event.preventDefault();
        var area = 1/2 * (parseInt(base1.value) * parseInt(height1.value));

        result1.innerHTML = "Area is : "+area+" sq units";

});
btn.addEventListener("click",()=>{
     
     var validation = validateInput(a.value,b.value,c.value);
    const formattedOne = Number(a.value);
    const formattedTwo = Number(b.value);
    const formattedThree = Number(c.value);

     if(validation){
         
         if((formattedOne+formattedTwo)>formattedThree && (formattedTwo+formattedThree)>formattedOne && (formattedOne+formattedThree)>formattedTwo){
           
            var s = (Number(formattedOne) + Number(formattedTwo) + Number(formattedThree)) / 2;
            
            const area = Math.sqrt(s * (s - formattedOne) * (s - formattedTwo) * (s - formattedThree));
            console.log(area);
            result2.innerHTML = "Area is : "+area.toFixed(4)+" sq units";
         
        }else{
            result2.style.display = "block";
            result2.innerText = "Invalid lengths entered. The length of a side should be smaller than the sum of two sides.";
        }

    } else {
        result2.style.display = "block";
        result2.innerText = errorMessage;
    }
     
});
    
const validateInput = (angleA, angleB, angleC) => {
    if(angleA !== '' && angleB !== '' && angleC !== ''){
    
        if(Math.sign(angleA) > 0 && Math.sign(angleB) > 0 && Math.sign(angleC) > 0){
            return true;
        } else {
            errorMessage = "Inputs can't have a negative value.";
            return false;
        }
    }else{
        errorMessage = "All three inputs must be filled.";
        return false;
    }
}

