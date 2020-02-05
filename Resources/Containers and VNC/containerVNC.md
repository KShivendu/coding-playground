docker run -p 2223:22 -p 5950:5900 -p 6080:6080 x11vnc/desktop

This will serve vnc.html at http://localhost:6080/vnc.html

When the container spins up, you will get the automated url and the password also

To use with VNC Viewer android app from phone or windows, use the port 5950(As specified while starting the container, don't make it 5900 - as this one can be used by the host computer itself while running x11vnc locally) with the IP of your computer


Another similar but insecure container is :
https://github.com/fcwu/docker-ubuntu-vnc-desktop
