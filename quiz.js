var form =document.querySelector(".form");
var questions = document.querySelector("#submit");
var output = document.querySelector("#isTriangle");
var answers =["Yes","No","Yes","Yes","Yes","Isosceles","30","Both","5cm","Scalene"]

form.addEventListener("submit" ,(event) =>{
    event.preventDefault();
    
    let index = 0;
    let score =0;
    const results = new FormData(form);
    for(value of results.values())
    {
        if(value === answers[index])
        {
            score += 1;
            console.log(value);
           
        }
        index++;
    }
    
    console.log(score);
    output.innerText =("Score is : "+score+"/10");
    
});



