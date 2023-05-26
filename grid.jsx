// studioASK

var folderPath = "~/ASKproduKtion Dropbox/scripting ops/_files"; // Set the folder path
var folder = new Folder(folderPath); // Create a Folder object for the folder

const numFrames = 9; // set number of frames in grid
const aspectRatioXY = 1/1; // set aspect ratio of grid
var numRows = Math.sqrt(numFrames/aspectRatioXY);
var numColumns = numRows * aspectRatioXY;
var askDoc1 = app.documents.add(2160*numColumns, 2160*numRows);

if (folder.exists) { // Check if the folder exists
  var files = folder.getFiles(); // Get an array of File objects for the files in the folder

  for (var i = 0; i < numFrames; i++) {
    var file = files[i];

    if (file instanceof File && file.hidden == false && file.name[0] != '.') { // Check if the file is a regular file (not a folder or hidden file)
      // Do something with the file
      var askDoc2 = app.open(file);
        askDoc2.artLayers["Layer 1"].copy();
        askDoc2.close();
        var tileX = ( i % numColumns ) + 1;
        var tileY = Math.floor( i / numColumns ) + 1;
        var askShape = [
            [2160*(tileX-1), 2160*(tileY-1)],
            [2160*(tileX), 2160*(tileY-1)],
            [2160*(tileX), 2160*(tileY)],
            [2160*(tileX-1), 2160*(tileY)],
        ];
        activeDocument = askDoc1;
        activeDocument.selection.select(askShape);
        activeDocument.paste();
    }
  }
}
