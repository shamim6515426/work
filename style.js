var icon= document.querySelector("heasd");
var tagimg= document.querySelector(".tagimg");

tagimg.addEventListener("mouseover",()=>{
  icon.classList.add("iconber");
});
tagimg.addEventListener("mouseout",()=>{
    icon.classList.remove("iconber");
  });


