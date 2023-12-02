let meno = document.getElementById("meno");
let sub = document.getElementById("sub");
let close1 = document.getElementById("close");
meno.addEventListener("click",function(){
  sub.style.display="block"
})
close1.addEventListener("click",function(){
  sub.style.display="none"
})




// robat
let box1 =document.getElementById("box1");
let input =document.getElementById("btn");
 let box =document.getElementById("box");
input.addEventListener("click" , function(){
  box1.style.display="none"
  box.style.display="block"
})
