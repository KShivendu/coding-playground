#!/bin/sh

# . py-sandbox/bin/activate
export FLASK_APP=server
export FLASK_ENV=development
flask run
