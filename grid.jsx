// studioASK
const numFrames = 12;
const aspectRatioXY = 4/3;
var numRows = Math.sqrt(numFrames/aspectRatioXY);
var numColumns = numRows * aspectRatioXY;
var askDoc1 = app.documents.add(2160*numColumns, 2160*numRows);
for(var counter = 0; counter < numFrames; counter++) {
    var askDoc2 = app.open(File("~/ASKproduKtion Dropbox/Andrew Klug/studioASK/images/" + (counter+1) + ".png"));
    askDoc2.artLayers["Layer 1"].copy();
    askDoc2.close();
    var tileX = ( counter % numColumns ) + 1;
    var tileY = Math.floor( counter / numColumns ) + 1;
    var askShape = [
        [2160*(tileX-1), 2160*(tileY-1)],
        [2160*(tileX), 2160*(tileY-1)],
        [2160*(tileX), 2160*(tileY)],
        [2160*(tileX-1), 2160*(tileY)],
    ];
    activeDocument = askDoc1;
    activeDocument.selection.select(askShape);
    activeDocument.paste();
};