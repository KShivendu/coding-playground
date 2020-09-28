# Sandbox server

This is an coding playground built with JS, Bulma CSS, Docker and Python.

## Setup

- Run `server-setup.sh` to install dependencies (configured for Ubuntu 18.04)
- Create a virtual environment
- Install flask, gunicorn, and the python docker library in the virtual environment
- Run `start-gunicorn.sh` to run
- Download nginx, set up with config shown below
- Copy files from `sever/static/` into `/var/www/html/`
- Download Let's Encrypt certbot, set up certificate

## Nginx configuration

```nginx
location / {
	# First attempt to serve request as file, then
	# as directory, then fall back to displaying a 404.
	try_files $uri $uri/ =404;
}

location /hello {
	proxy_pass http://localhost:8000/hello;
}

location /run {
	proxy_pass http://localhost:8000/run;
}
```

Remember that to expose docker for xterm you will have to make following changes in 
/etc/systemd/system/multi-user.target.wants/docker.service
use
`ExecStart=/usr/bin/dockerd -H tcp://localhost -H fd:// --containerd=/run/containerd/containerd.sock`
<!-- -H tcp://10.3.7.86 can also be used -->

Now kill the existing process
ps axf | grep docker | grep -v grep | awk '{print "kill -9 " $1}' | sudo sh 

# Reload daemon configuration for systemctl

systemctl daemon-reload

Then restart dockerd with systemctl

sudo systemctl start docker

You can verify the ports with :
sudo netstat -tulpn | grep LISTEN
or 
docker -H tcp://localhost ps


Install certbox from
https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx
