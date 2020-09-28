http://wiki.ros.org/docker/Tutorials/GUI


# My understanding of polygott docker container
root@93c7b88c0d85:/home/runner# netstat -tulpn | grep LISTEN
tcp        0      0 0.0.0.0:5900            0.0.0.0:*               LISTEN      22/x11vnc           
tcp6       0      0 :::5900                 :::*                    LISTEN      22/x11vnc


# Use this command inside the container
bash -c xset q && DISPLAY=MAGIC run-project

# To start the container
docker run -p 2223:22 -p 5950:5900 -p 6080:6080 -it replco/polygott
