function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(300, 300, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    rect(580, 90, 20, 300);
}

function take_snapshot(){
    save('filteredcolorphoto.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}