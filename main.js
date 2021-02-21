canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=80;
car1_height=90;
car1_x=100;
car1_y=300;
background_img="racing.jpg";
car1_img="car1.png";
car2_width=80;
car2_height=90;
car2_x=100;
car2_y=400;
car2_img="car2.png";
function add(){
background_imgtag=new Image();
background_imgtag.onload=upload_background;
background_imgtag.src=background_img;
car1_imgtag=new Image();
car1_imgtag.onload=upload_car1;
car1_imgtag.src=car1_img;
car2_imgtag=new Image();
car2_imgtag.onload=upload_car2;
car2_imgtag.src=car2_img;
}
function upload_background(){
    ctx.drawImage(background_imgtag, 0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
    
}
function upload_car2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='65'){
        left1();
        console.log("left");
    }
    if (keypressed=='68'){
        right1();
        console.log("right");
    }
    if (keypressed=='87'){
        up1();
        console.log("up");
    }
    if (keypressed=='83'){
        down1();
        console.log("down");
    }
}
function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function up1(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function down1(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function left1(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
function right1(){
    if (car2_x<=700){
        car2_x=car2_x+10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        upload_background(); 
        upload_car1();
        upload_car2();
    }
}
























