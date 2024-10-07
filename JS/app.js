burgerButton = document.getElementById("burger");
nav = document.getElementById("nav");
expand = "animation-name:expand;animation-duration:1s;visibility:visible;"+
"animation-fill-mode:forwards;";
shrink = "animation-name:shrink;animation-duration:1s;visibility:hidden;"+
"animation-fill-mode:forwards;"
console.log(burgerButton);
expanded = true;
burgerButton.addEventListener("click",function(){
if(expanded){
nav.setAttribute("style",shrink);
expanded = false;
}else{
nav.setAttribute("style",expand);
expanded = true;
}
});