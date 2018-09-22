'use strict';
const electron = require('electron');
const os = require('os');
const path = require('path')

var apiProcess = null;

// Module to control application life.
const {
    app
} = electron;
// Module to create native browser window.
const {
    BrowserWindow
} = electron;
let win;
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1024,
        height: 600
    });
    var url = 'file://' + __dirname + '/../www/index.html';
    var Args = process.argv.slice(2);
    Args.forEach(function (val) {
        if (val === "test") {
            url = 'http://localhost:8100'
        }
    });
    // and load the index.html of the app.
    win.loadURL(url);

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', startApi);
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});


function startApi() {
  var proc = require('child_process').spawn;
  //  run server
  var basepath = __dirname.replace('.asar', '');
  var apipath = path.join(basepath, '..\\api\\win\\dotnet.exe')
  switch(os.platform())
  {
    case "linux":
      apipath = path.join(basepath, '..//api//linux//dotnet')
      break;
    case "darwin":
      apipath = path.join(basepath, '..//api//mac//dotnet')
      break;
  }

  apiProcess = proc(apipath)

  apiProcess.stdout.on('data', (data) => {
    writeLog(`stdout: ${data}`);
    if (win == null) {
      createWindow();
    }
  });
}

//Kill process when electron exits
process.on('exit', function () {
  writeLog('exit');
  apiProcess.kill();
});

function writeLog(msg){
  console.log(msg);
}
