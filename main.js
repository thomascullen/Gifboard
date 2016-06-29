import { app, BrowserWindow, Menu, shell, globalShortcut, ipcMain } from 'electron';

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require
    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];
    for (const name of extensions) {
      try {
        await installer.default(installer[name]);
      } catch (e) {} // eslint-disable-line
    }
  }
};


let mainWindow;

app.on('ready', async () => {
  await installExtensions();
  app.dock.hide()

  mainWindow = new BrowserWindow({
    width: 640,
    height: 500,
    show: false,
    frame: false,
    hasShadow: false,
    transparent: true,
    alwaysOnTop: true,
    fullscreenable: false
  });

  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  globalShortcut.register('Control+Command+g', () => {
    if (!mainWindow.isVisible()) {
      openGifBoard();
    }
  })

  globalShortcut.register('Escape', () => {
    if (mainWindow.isVisible()) {
      hideGifBoard();
    }
  })

  ipcMain.on('copy-gif', hideGifBoard);
});

function openGifBoard() {
  mainWindow.show();
  mainWindow.focus();
  mainWindow.webContents.send('window-focus');
}

function hideGifBoard() {
  mainWindow.webContents.send('window-blur');
  mainWindow.hide();
}
