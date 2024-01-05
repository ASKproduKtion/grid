// https://ASKproduKtion.com
// Copyright (c) 2023 >> Andrew S Klug // ASKproduKtion
// Licensed under the Apache License, Version 2.0 (the "License"); this file may not be used except in compliance with the License, a copy of which is available at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

var folderPath = "~/ASKproduKtion Dropbox/scripting ops/_files"; // set the folder path
var folder = new Folder(folderPath); // create a Folder object for the folder

const numFrames = 9; // set number of frames in grid
const aspectRatioXY = 1/1; // set aspect ratio of grid
var numRows = Math.sqrt(numFrames/aspectRatioXY);
var numColumns = numRows * aspectRatioXY;
var askDoc1 = app.documents.add(2160*numColumns, 2160*numRows);

if (folder.exists) { // check if the folder exists
  var files = folder.getFiles(); // get an array of File objects for the files in the folder

  for (var i = 0; i < numFrames; i++) {
    var file = files[i];

    if (file instanceof File && file.hidden == false && file.name[0] != '.') { // check if the file is a regular file (not a folder or hidden file)
      // place the asset on grid
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
