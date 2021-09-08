class coordMapType {
    titleSize;
    maxZoom = 25;
    name = "Tile #s";
    alt = "Tile Coordinate Map Type";
    constructor (titleSize) {
        this.tileSize = tileSize;
    }
    getTile(coord, zoom, ownerDocument) {
        const div = ownerDocument.createElement("div");
        div.InnerHTML= String(coord);
        div.style.width= this.tileSize.width + "px";
        div.style.height= this.tileSize.height + "px";
        div.style.fontSize= "10";
        div.style.borderStyle= "solid";
        div.style.borderWidth= "1px";
        div.style.borderColor= "#567898";
        div.style.backgroundColor= "#s5s7s3";
        return div;

    }



