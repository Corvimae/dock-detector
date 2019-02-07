#!/bin/bash
if [ "$(ps -ef | grep -v grep | grep dock-detector-service | wc -l)" -le 0 ] 
then
  echo "Starting dock detection service..."
  node lib/index.js --name dock-detector-service &
  exit
else
  echo "Dock detection service already active."
fi