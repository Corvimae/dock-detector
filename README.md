# Dock Detector

Detects when you plug in a USB device and toggles mirroring accordingly. This is useful if you have a
KM switch hooked up to a dock, and your dock/monitors aren't smart enough to disconnect the monitors
when the input is switched to another device.

## Prerequisites

[https://github.com/fcanas/mirror-displays](https://github.com/fcanas/mirror-displays) in `/usr/local/bin`.

## Configuration

Edit `device-profile.json` with the vendor and product IDs of your USB device.
If you don't know them, call `system_profiler SPUSBDataType` and scroll until
you find the device with the name that matches.

## Auto-launch on Startup (OSX)

Copy `com.acceptableice.DockDetector.plist` to `/Library/LaunchDaemons` and enter your user and group.