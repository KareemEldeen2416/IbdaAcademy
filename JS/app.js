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
let expandDetails = "height:500px; transition-duration:1s;"
let shrinkDetails = "height: 0px; transition-duration:1s;"
let rotateIcon = "transform: rotateZ(-180deg); transition-duration: 1s; filter:drop-shadow(0 0 1px purple); background-color: var(--primaryColor); color:white;"
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








// Set arrow for common questions
let answers = document.getElementsByClassName("answer");
let dropButtons = document.getElementsByClassName("drop");
let expandDrop = "height:fit-content; transition-duration:1s;"
dropExpanded = false;
for(let i =0 ; i < dropButtons.length;i++){
dropButtons[i].addEventListener("click",function(){
if(dropExpanded){
dropButtons[i].setAttribute("style",reverseRotateIcon);
answers[i].setAttribute("style",shrinkDetails);
dropExpanded = false;
}else{
dropButtons[i].setAttribute("style",rotateIcon);
answers[i].setAttribute("style",expandDrop);
dropExpanded = true;
}
});
}




/////////////////////////////////////////////

// Projects slide show
let imagesArray = ["frontproject1.jpg","frontproject2.jpg","frontproject3.jpg","frontproject4.jpg","photoshop1.PNG","photoshop2.PNG","photoshop3.PNG","photoshop4.PNG","photoshop5.PNG","photoshop6.PNG","scratch1.PNG","scratch2.PNG","scratch3.PNG"];
let projectTypes = ["Front-End","Front-End","Front-End","Front-End","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop","Scratch","Scratch","Scratch"];
let projectTitles = ["موقع تسوق الكتروني"," موقع الكتروني لحجز تذاكر السفر للرحلات","موقع الكتروني لحجز تذاكر السفر للرحلات","موقع لتصفح وشراء ساعات اليد عبر الانترنت","تصميم لمنتج غذائي","تصميم لمنتج غذائي","تصميم لمنشور علي مواقع التواصل","تصميم اعلان علي مواقع التواصل","تصميم لاضافة تأثيرات علي صورة","تصميم لاعلان تطبيق علي الهاتف","لعبة الوحش باستخدام سكراتش","لعبة بينج بونج باستخدام سكراتش","برنامج الرسام باستخدام سكراتش"];
// let proejectDescs=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
let projectImage = document.getElementById("projectImage");
let projectType = document.getElementById("projectType");
let projectTitle = document.getElementById("projectTitle");
let i =0;
setInterval(function(){
projectImage.setAttribute("src",("./images/"+imagesArray[i]));
projectType.innerText = projectTypes[i];
projectTitle.innerText = projectTitles[i];
// projectDetails.innerText = proejectDescs[i];
i++;
if(i==imagesArray.length){i=0}
},2000);

