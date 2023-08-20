let splats = [];

let bgColor1;

let bgColor2;

let splatColor;

let colourIndex = 0;

let COLOURS;

let rotation = 0;

const numSplats = 200;

function setup() {
    createCanvas(500, 700);
    noStroke();

    COLOURS = [
        color(180, 130, 102),
        color(180, 130, 202),
        color(238, 164, 127),
        color(250, 97, 102),
        color(226, 210, 249),
        color(252, 231, 126),
        color(60, 145, 128),
    ];

    bgColor1 = color(224, 213, 203);
    bgColor2 = COLOURS[colourIndex];
    splatColor = color(90);
    populateSplats();
    splitSplats();
}

function draw() {
    rotate(0);
    paintBackground();
    rotate(rotation);
    paintSplats();
}

function populateSplats() {
    for (let i = 0; i < numSplats; i++) {
        splats.push(new Splat(splatColor));
    }
}

function paintSplats() {
    fill(splatColor);
    for (let i = 0; i < splats.length; i++) {
        splats[i].show();
    }
}

function paintBackground() {
    background(bgColor1);
    fill(bgColor2);
    rect(0, height / 2, width, height / 2);
}

function splitSplats() {
    for (var i = splats.length - 1; i >= 0; i--) {
        splats[i].split().forEach((newSplat) => {
            splats.push(newSplat);
        });
        splats.splice(i, 1);
    }
}

function mousePressed() {
    colourIndex++;
    if (colourIndex >= COLOURS.length) colourIndex = 0;
    bgColor2 = color(COLOURS[colourIndex]);

    splats = [];
    populateSplats();
    splitSplats();
    rotation = randomRange(-0.15, 0.3);
}
