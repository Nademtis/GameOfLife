"use strict"
export default class View {

    controller;

    constructor(controller) {
        this.controller = controller;

    }

    initButtons() {
        let killButton = document.querySelector("#killButton");
        killButton.addEventListener("click", () => this.killAll());

        let reviceSomebtn = document.querySelector("#reviveButton");
        reviceSomebtn.addEventListener("click", () => this.reviveSomeCells());
    }

    killAll(){
        this.controller.killAll()
    }
    reviveSomeCells(){
        this.controller.reviveSomeCells()
    }

    updateGrid(list) {
        const gridContainer = document.querySelector("#grid_table");
        gridContainer.innerHTML = ""

        for (let r = 0; r < list.length; r++) {
            const tr = document.createElement("tr")

            for (let c = 0; c < list[r].length; c++) {
                const td = document.createElement("td")
                td.classList.add(list[r][c] ? "cellAlive" : "cellDead")
                tr.appendChild(td);
            }
            gridContainer.appendChild(tr);
        }
    }
    updateSimCount(count){
        let simCount = document.querySelector("#sim_count")
        simCount.innerHTML = count
    }
}
