canvas= new fabric.Canvas("my_canvas")
ctx=canvas.getContext("2d");

img_height=100;
img_width=60;
img_x=100
img_y=100

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log("keypressed");

    if(keypressed==82){
        red_ranger();
        console.log("red");
    }

    if(keypressed==66){
        blue_ranger();
        console.log("blue")
    }

    if(keypressed==71){
        green_ranger();
        console.log("green")
    }

    if(keypressed==80){
        pink_ranger();
        console.log("pink")
    }

    if(keypressed==89){
        yellow_ranger();
        console.log("yellow")
    }
}

function red_ranger(){
    img_image="rr1.png"
    add();
}

function blue_ranger(){
    img_image="br.png"
    add();
}

function green_ranger(){
    img_image="gr.png"
    add();
}

function pink_ranger(){
    img_image="pr.png"
    add();
}

function yellow_ranger(){
    img_image="yr.png"
    add();
}