/* eslint strict: 0, no-unused-vars: 0, no-undef: 0 */

'use strict';

function init() {
  console.log('Script started!');
}

let backgroundImage;

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  backgroundImage = loadImage('./res/images/background.png');
}

function draw() {
  // put code here that needs to run at every image update
  clear();
  background(backgroundImage);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  // put code here that needs to run in the beginning once
  resizeCanvas(windowWidth / 2, windowHeight / 2);
}
