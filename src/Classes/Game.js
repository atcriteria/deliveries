/*
    The main class that starts the game and contains
    top-level methods for managing the game state.

    Game.start() starts the game and is called after
    the Canvas component is rendered in App.

*/

import Building from "./Building";

export default class Game {
    constructor(){
        this.canvas = null;
        this.context = null;
        this.numBuildings = 3;
    }
    // Starts the game
    start(){
        const canvas = document.getElementById("gameCanvas");
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        // this.interval = setInterval(this.updateGameArea, 5000);
    }

    clearGameWindow(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    updateGameArea(){
        this.clearGameWindow();
        this.createBuildings(this.numBuildings)
    }

    // Constructs buildings into the Canvas
    createBuildings(numBuildings){
        for (let i = 0; i < numBuildings; i++){
            let building = new Building(25, 25, "red");
            let ctx = this.context;
            ctx.fillStyle = "red";
            ctx.fillRect((i*(building.width*2)), (i*0), building.width, building.height)
        }
    }
}