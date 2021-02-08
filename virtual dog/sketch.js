var dog,dogImg,dogImg1,dog1;
var database;
var foodS,foodStock;
var milk , milkimg;

function preload(){
dogImg=loadImage("Images/Dog.png");
dogImg1=loadImage("Images/happy dog.png");
milkimg=loadImage("Images/milk1.jpg");
}
function setup() {
database=firebase.database();
createCanvas(500,500);

dog=createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale=0.15;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
textSize(20); 
milk=createSprite(150,400,200,70);
milk.addImage(milkimg);
milk.scale=0.05
}
function draw() {
background("red");
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg1);
}
drawSprites();
fill(255,255,254);
stroke("green");
text("Food remaining : "+foodS,170,200);
textSize(13);
text(" UP_ARROW Key To Feed lucy Milk!",120,20,340,20);
text(" PRESS DOWN ARROWN KEY TO MAKE LUCY SIT!",130,60,340,20);
if(keyWentDown(DOWN_ARROW)){
    dog.addImage(dogImg)
}
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0;
}else{
x=x-1;
} 
database.ref('/').update({
Food:x
})
}