const { app, BrowserWindow, globalShortcut } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        title: 'Time',
        fullscreen: true
        //width:800,
        //height:600
    })

    win.loadFile('index.html');
    globalShortcut.register('CommandOrControl+S', () => {
        win.webContents.executeJavaScript(`openNav()`);
    });
    globalShortcut.register('CommandOrControl+C', () => {
        win.webContents.executeJavaScript(`closeNav()`);
    });
    globalShortcut.register('CommandOrControl+X', () => {
        app.quit();
    });
}



app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', function () {
    //if (process.platform !== 'darwin') 
    app.quit()
})

