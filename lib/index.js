const usb = require('usb')
const { exec, execSync } = require('child_process')

const profile = require('../device-profile.json')

process.stdin.resume();

process.on('exit', process.exit);
process.on('SIGINT', process.exit);
process.on('SIGUSR1', process.exit);
process.on('SIGUSR2', process.exit);
process.on('uncaughtException', process.exit);

const isMatchingDevice = ({ deviceDescriptor: { idVendor, idProduct }}) => {
  return profile.idVendor === idVendor && profile.idProduct === idProduct
}

const isMirroring = () => execSync('mirror -q').toString().trim() === 'on'

console.log(`Watching for USB status changes (idVendor: ${profile.idVendor}, idProduct: ${profile.idProduct})...`)

usb.on('attach', device => {
  if (isMatchingDevice(device)) {
    if (isMirroring()) {
      console.log('Disabling mirroring...');
      exec('mirror -off');
    }
  }
})

usb.on('detach', device => {
  if (isMatchingDevice(device)) {
    if (!isMirroring()) {
      console.log('Enabling mirroring...')
      exec('mirror -on');
    }
  }
})