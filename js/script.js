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
let robat = document.getElementById("robat");
let check = document.getElementById("check");
let pedar = document.getElementById("pedar");
let text = document.getElementById("text");
let random = document.getElementById("random");
let change = document.getElementById("change");
let sabt = document.getElementById("sabt");
let tik = document.getElementById("tik");
let num1;
let num2;
check.addEventListener("click", function () {
  robat.style.display = "none";
  pedar.style.display = "block";
});
random.innerHTML = `${Math.floor(Math.random() * 100000)}`;
change.addEventListener("click", function () {
  random.innerHTML = `${Math.floor(Math.random() * 100000)}`;
});
sabt.addEventListener("click", function () {
  if (text.value === random.innerHTML) {
   robat.style.display = "none";
   pedar.style.display = "none";
   tik.style.display = "block"
  } else alert("لطفا متن ‌صحیح را وارد نمایید :))) ");
  text.value = "";
  random.innerHTML = `${Math.floor(Math.random() * 10000000)}`;

});
//top
$(document).ready(function () {
  $(document).on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > 350) {
      $("#top").fadeIn(350);
    } else {
      $("#top").fadeOut(350);
    }
  });
  $("#top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500,
      "swing"
    );
  });
});