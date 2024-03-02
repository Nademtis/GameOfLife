"use strict"

import Controller from "controller.js"
window.addEventListener("load", start);

const controller = new Controller()

let width = 40                   //width of grid
let height = 20                  //height of grid
let simDelay = 0.5               //delay between simulations in seconds
let initLivePercentage = 15     //initial live or die state of cells in percent
let revivePercentage = 5         //the revival percentage for each cell (frontEnd button)

function start() {
    controller.initGame(width, height, simDelay, initLivePercentage, revivePercentage)
}

