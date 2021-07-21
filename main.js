var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="Black";
width_of_line="1";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color");
    width_of_line=document.getElementById("width");

    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y cordinates");
        console.log("x="+ last_position_of_x +"y="+ last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y values=");
        console.log("x="+ current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        console.log(mouseEvent);
    }
    mouseEvent="mouseMove";
    console.log(mouseEvent);
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}

canvas.addEventListener("mouseUp",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp";
}


canvas.addEventListener("mouseLeave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave";
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    console.log("clear");
}