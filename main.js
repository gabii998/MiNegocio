const { app, BrowserWindow, ipcMain } = require('electron')

// Mantén una referencia global del objeto window, si no lo haces, la ventana 
// se cerrará automáticamente cuando el objeto JavaScript sea eliminado por el recolector de basura.
let win

function createWindow() {
  // Crea la ventana del navegador.
  win = new BrowserWindow({ width: 800, height: 600,
                            frame: false,
                             })
  win.setMenu(null);
  win.setTitle("Gestión de ventas");



  // y carga el archivo index.html de la aplicación.
  win.loadFile('dist/stock-angular/index.html')

  // Abre las herramientas de desarrollo (DevTools).
  win.webContents.openDevTools()

  //Recibe los eventos desde el frontend cuando los botones de la ventana son presionados
  ipcMain.on('window-button', function (event, mensaje) {
    var ventana = BrowserWindow.getFocusedWindow();
    switch (mensaje) {
      case 'maximizar':

        if (ventana.isMaximized()) {
          ventana.unmaximize();
        } else {
          ventana.maximize();
        }
        break;
      case 'cerrar':
        ventana.close();
        break;
      case 'minimizar':
        ventana.minimize();
        break;
    }
  })

  // Emitido cuando la ventana es cerrada.
  win.on('closed', () => {
    // Elimina la referencia al objeto window, normalmente  guardarías las ventanas
    // en un vector si tu aplicación soporta múltiples ventanas, este es el momento
    // en el que deberías borrar el elemento correspondiente.
    win = null
  })
}
// Este método será llamado cuando Electron haya terminado
// la inicialización y esté listo para crear ventanas del navegador.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.on('ready', createWindow)