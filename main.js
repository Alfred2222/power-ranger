canvas= new fabric.Canvas("my_canvas")
ctx=canvas.getContext("2d");

img_height=430;
img_width=350;
img_x=1;
img_y=1;
image_ranger=""

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    image_ranger=Img
     image_ranger.scaleToWidth(img_width)
     image_ranger.scaleToHeight(img_height)
     image_ranger.set({
        top:img_y,
        left:img_x
    })
    canvas.add( image_ranger)
    })
    }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log("keypressed");

    if(keypressed=='82'){
        new_image('rr1.png')
        console.log("red");
    }

    if(keypressed=='66'){
        img_x=200;
        console.log("blue")
        new_image('br.png')
    }

    if(keypressed=='71'){
        img_x=350;
        console.log("green")
    }

    if(keypressed=='80'){
        img_x=600;
        console.log("pink")
    }

    if(keypressed=='89'){
        img_x=700;
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