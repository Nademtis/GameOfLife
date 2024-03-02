export default class Model {

    list

    constructor() {
        this.list = [[]]
    }

    toLiveWithPercentage(percentage) {
        if (percentage < 0 || percentage > 100) {
            console.error("Percentage must be between 0 and 100");
            return false;
        }
        const randomPercentage = Math.random() * 100;
        return randomPercentage <= percentage;
    }

    initList(width, height, percentageToLive) {
        this.list = []; // init list
        for (let r = 0; r < height; r++) {
            this.list[r] = []; //init list row
            for (let c = 0; c < width; c++) {
                this.list[r][c] = this.toLiveWithPercentage(percentageToLive)
            }
        }
        return this.list;
    }

    simulateAndUpdateNewList() {
        const newGrid = this.list;
        const rows = this.list.length;
        const cols = this.list[0].length;

        for (let r = 0; r < rows; r++) {

            for (let c = 0; c < cols; c++) {
                let count = this.countAliveNeighbors(r, c)

                switch (count) {
                    case 0: newGrid[r][c] = false; break;
                    case 1: newGrid[r][c] = false; break;
                    case 2: break;
                    case 3: newGrid[r][c] = true; break;
                    default: newGrid[r][c] = false;
                }
            }
        }
        this.list = newGrid
        return this.list
    }
    countAliveNeighbors(r, c) {
        let count = 0;
        const rows = this.list.length;
        const cols = this.list[0].length;

        if (c + 1 < cols && this.list[r][c + 1]) count++;                       // right
        if (c - 1 >= 0 && this.list[r][c - 1]) count++;                         // left
        if (r + 1 < rows && this.list[r + 1][c]) count++;                       // under
        if (r - 1 >= 0 && this.list[r - 1][c]) count++;                         //over
        if (r + 1 < rows && c + 1 < cols && this.list[r + 1][c + 1]) count++;   // downRight
        if (r - 1 >= 0 && c - 1 >= 0 && this.list[r - 1][c - 1]) count++;       //  up left
        if (r + 1 < rows && c - 1 >= 0 && this.list[r + 1][c - 1]) count++;     //  down left
        if (r - 1 >= 0 && c + 1 < cols && this.list[r - 1][c + 1]) count++;     //  up right

        return count;
    }
    killAllCells() {
        for (let r = 0; r < this.list.length; r++) {
            for (let c = 0; c < this.list[r].length; c++) {
                this.list[r][c] = false
            }
        }
        return this.list;
    }
    reviveSomeCells(revivePercentage) {
        for (let r = 0; r < this.list.length; r++) {
            for (let c = 0; c < this.list[r].length; c++) {
                if (!this.list[r][c]) { // only try to revive if dead
                    this.list[r][c] = this.toLiveWithPercentage(revivePercentage)
                }
            }
        }
        return this.list;
    }
}
/*
- < 2 naboer - cellen dør af ensomhed
- 2 naboer - cellen lever videre, hvis den altså var levende
- 3 naboer - en ny celle bliver født, eller lever videre, hvis der var en
- > 3 naboer - cellen død af overbefolkning
*/