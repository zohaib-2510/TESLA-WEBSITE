var heart = document.getElementById("heart");
var btn = document.querySelector("btnlike");

function myLike(){
    btn.addEventListener("click",function(){
        heart.style.backgroundColor="red"
        console.log("ok");
    })
}
myLike()
console.log("ljnoihk");