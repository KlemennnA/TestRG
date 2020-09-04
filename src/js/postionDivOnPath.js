window.addEventListener('resize', positionAdvantagesGroup);

function positionAdvantagesGroup(){
   positionAdvantages("1", 0.10);
   positionAdvantages("2", 0.35);
   positionAdvantages("3", 0.5);
   positionAdvantages("4", 0.85);
}

function positionAdvantages(id,pos){
   var div = document.getElementById(id);

   var  path = document.getElementById("bigEllipsePath");
   var  pathLength = path.getTotalLength();
   var  loc = path.getPointAtLength(pos * pathLength);

   var leftFactor = document.getElementById("Advantages").offsetWidth / 303;
   var topFactor = document.getElementById("Advantages").offsetHeight / 100;

   if(div.id == "4"){
      div.style.left = (leftFactor * loc.x - div.offsetWidth*0.9) + "px";
      div.style.top = topFactor * loc.y + "px";
   }
   else if(div.id == "1"){
      div.style.left = (leftFactor * loc.x * 0.9) + "px";
      div.style.top = (topFactor * loc.y * 0.85) + "px";
   }
   else if(div.id == "2"){
      div.style.left = (leftFactor * loc.x * 0.9) + "px";
      div.style.top = (topFactor * loc.y * 0.8) + "px";
   }
   else if(div.id == "3"){
      div.style.left = (leftFactor * loc.x) + "px";
      div.style.top = (topFactor * loc.y) + "px";
   }
   else{
      div.style.left = leftFactor * loc.x + "px";
      div.style.top = topFactor * loc.y + "px";
   }
}
