var colors = ["red", "green", "blue", "cyan", "magenta", "yellow"];

var hexagonGrid = new HexagonGrid("HexCanvas", 50);

/* var pixel = hexagonGrid.context.getImageData(50, 0, 1, 1).data;
console.log(pixel[0], pixel[1], pixel[2]) */
var sizex = Math.round(window.innerWidth / 75);
var sizey = Math.round(window.innerHeight / 90);
var state = new Array(sizey);

for (let i = 0; i < state.length; i++) {
    state[i] = new Array(sizex)  
}

hexagonGrid.drawHexGrid(sizey, sizex, 0, 0)
hexagonGrid.drawHexAtColRow(0, 0, colors[(Math.floor(Math.random() * colors.length))], "black", state)


function click(tile) {
    hexagonGrid.drawHexAtColRow(
        tile.column - Math.round(window.innerWidth / 160),
        tile.row - Math.round(window.innerHeight / 190),
        colors[(Math.floor(Math.random() * colors.length))],
        "black",
        state
    );
}