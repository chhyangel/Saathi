const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number");

let a=5;
plus.addEventListener("click", ()=>{
    a+=5;
    number.innerText =a;
})
minus.addEventListener("click", ()=>{
    if(a>5){
    a-=5;
    number.innerText =a;
    }

})