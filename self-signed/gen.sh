#!/usr/bin/bash
openssl req -x509 -nodes -days 36525 -newkey rsa:2048 -keyout nginx.key -out nginx.crt