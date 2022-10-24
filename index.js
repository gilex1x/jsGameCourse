const canvas = document.getElementById("canvas1");
const canvasContext = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 500);

const playerImages = new Image();
playerImages.src = "./assets/shadow_dog.png";
//console.log(playerImages)
 let x=0;
 let y=0;
const animateFrame = () => {
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvasContext.fillRect(x,y, 100, 100);
    x=Math.floor(Math.random()*CANVAS_WIDTH)
    y=Math.floor(Math.random()*CANVAS_HEIGHT)
  requestAnimationFrame(animateFrame);
};

animateFrame();
