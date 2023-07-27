var colors = ["red", "green", "blue", "cyan", "magenta", "yellow"];

var hexagonGrid = new HexagonGrid("HexCanvas", 50);
hexagonGrid.drawHexAtColRow(0, 0, colors[(Math.floor(Math.random() * colors.length))], "black")

/* var pixel = hexagonGrid.context.getImageData(50, 0, 1, 1).data;
console.log(pixel[0], pixel[1], pixel[2]) */

function click(tile) {
    hexagonGrid.drawHexAtColRow(
        tile.column - Math.round(window.innerWidth / 160),
        tile.row - Math.round(window.innerHeight / 190),
        colors[(Math.floor(Math.random() * colors.length))],
        "black"
    );
}