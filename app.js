let btn=document.querySelector("button");
let div=document.querySelector("div");
let h3=document.querySelector("h3");

btn.addEventListener("click",function(){
    let randomC=getFunction();
    h3.innerText=randomC;
    div.style.backgroundColor=randomC;
})
function getFunction(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
let color=`rgb(${red}, ${green}, ${blue})`;
return color;
}

