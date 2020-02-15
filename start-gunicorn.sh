#!/bin/bash

cd /home/krshivendu/Cloned Repos/python-sandbox/
source py-sandbox/bin/activate
gunicorn "server:create_app()"
