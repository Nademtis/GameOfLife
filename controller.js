"use strict"

import Model from "/model.js"
import View from "/view.js"



export default class Controller {
    view
    model
    simCount = 0
    revivePercentage;

    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }

    initGame(width, height, simDelay, initLivePercentage, revivePercentage) {
        this.revivePercentage = revivePercentage
        const list = this.model.initList(width, height, initLivePercentage)
        //const list = this.model.initList(5,5,25)                              //small test grid :)

        this.view.initButtons()
        this.view.updateGrid(list)
        this.startGameLoop(simDelay)
    }

    startGameLoop(simDelay) {
        this.simCount++
        this.view.updateSimCount(this.simCount)
        setTimeout(() => {
            const list = this.model.simulateAndUpdateNewList();
            this.view.updateGrid(list);
            this.startGameLoop(simDelay);
        }, simDelay * 1000);
    }

    killAll() {
        const list = this.model.killAllCells()
        this.view.updateGrid(list)
    }
    reviveSomeCells(revivePercentage) {
        const list = this.model.reviveSomeCells(5)
        this.view.updateGrid(list)
    }


}
