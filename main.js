canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color1="blue";
color2="black";
color3="red";
color4="rgb(255, 230, 0)";
color5="green";
color_rect="grey";

ctx.beginPath(); 
ctx.strokeStyle = color_rect; 
ctx.lineWidth = 1; 
ctx.rect(150, 143, 430 ,200); 
ctx.stroke();

  

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  mouse_x=e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  console.log("X = " + mouse_x + " ,Y = " + mouse_y);
  circle(mouse_x,mouse_y);
}


function circle(mouse_x,mouse_y){
    ctx.beginPath(); 
    ctx.strokeStyle = color1; 
    ctx.lineWidth = 2; 
    ctx.arc(250, 210, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
  
    ctx.beginPath(); 
    ctx.strokeStyle = color2; 
    ctx.lineWidth = 2; 
    ctx.arc(350, 210, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
  
    ctx.beginPath(); 
    ctx.strokeStyle = color3; 
    ctx.lineWidth = 2; 
    ctx.arc(450, 210, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
  
    ctx.beginPath(); 
    ctx.strokeStyle = color4; 
    ctx.lineWidth = 2; 
    ctx.arc(298, 250, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
  
    ctx.beginPath(); 
    ctx.strokeStyle = color5; 
    ctx.lineWidth = 2; 
    ctx.arc(398, 250, 40 ,0 , 2*Math.PI); 
    ctx.stroke();
}


function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}