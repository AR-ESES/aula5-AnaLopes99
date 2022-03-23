let laranjas;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)

}

function draw() {

background(0)


if(mouseY >= height/2) {
noFill();
}

else{

fill(12,108,57); //verde



}

if(mouseY <= height/2) {
	fill(221,56,56); //vermelho

}
else{
	fill(19,52,146); //azul
}

	stroke(230);
	strokeWeight(2);
	
	circle(width / 2, height / 2, height / 4);


}