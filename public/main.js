const { app, BrowserWindow } = require('electron')
// const path = require('path')

const frontendURL = 'http://localhost:3000'
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width:640,
    height:640,
    maxHeight:640,
    maxWidth:640,
    minHeight:640,
    minWidth:640,
    // frame: false,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    },
    show: false
  })

  mainWindow.loadURL(frontendURL)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
