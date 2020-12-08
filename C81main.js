 var canvas=document.getElementById("My_canvas");
 ctx=canvas.getContext("2d");
 var color="blue";
  
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=2;
 ctx.arc(200,200,40,0,2*Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown",My_mousedown); 
 function My_mousedown(e){
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    console.log("X="+mouse_x+"Y="+mouse_y);
    circle(mouse_x,mouse_y);
 }

 function circle(mouse_x,mouse_y){
    color=document.getElementById("color").value;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();

 }
 function cleararea(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }
