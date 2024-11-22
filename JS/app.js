burgerButton = document.getElementById("burger");
nav = document.getElementById("nav");
expand = "animation-name:expand;animation-duration:1s;visibility:visible;"+
"animation-fill-mode:forwards;";
shrink = "animation-name:shrink;animation-duration:1s;visibility:hidden;"+
"animation-fill-mode:forwards;";
console.log(burgerButton);
expanded = false;
burgerButton.addEventListener("click",function(){
if(expanded){
nav.setAttribute("style",shrink);
expanded = false;
}else{
nav.setAttribute("style",expand);
expanded = true;
}
});


let arrowButton = document.getElementsByClassName("detailButton");
let coursesDetails = document.getElementsByClassName("courseDetails");
console.log(coursesDetails);
console.log(arrowButton);
let expandDetails = "height: 200px; transition-duration:1s;"
let shrinkDetails = "height: 0px; transition-duration:1s;"
let rotateIcon = "transform: rotateZ(-180deg); transition-duration: 1s; filter:drop-shadow(0 0 1px purple);"
let reverseRotateIcon = "transform: rotateZ(0deg); transition-duration: 1s;"
let detailExpanded = false;


for(let i = 0 ; i < arrowButton.length ;i++){
arrowButton[i].addEventListener("click",function(){
if(detailExpanded){
arrowButton[i].setAttribute("style",reverseRotateIcon);
coursesDetails[i].setAttribute("style",shrinkDetails);
detailExpanded=false;
}else{
arrowButton[i].setAttribute("style",rotateIcon);
coursesDetails[i].setAttribute("style",expandDetails);
detailExpanded=true;
}
});
}









