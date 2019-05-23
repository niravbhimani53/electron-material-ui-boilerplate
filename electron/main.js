const { app } = require('electron')
const createWindow = require('./win')
const createMenu = require('./menu')

app.on('ready', () => {
  logVersions()
  createWindow()
  createMenu()
})

function logVersions() {
  const log = console.log

  log('-------------------------------------')
  log('Node version: ', process.versions.node)
  log('Electron version: ', process.versions.electron)
  log('Chrome version: ', process.versions.chrome)
  log('-------------------------------------')
}
