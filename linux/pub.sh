#!/usr/bin/env node
tar -zcf http-test.tar.gz ./*.js


scp http-test.tar.gz root@ip:/var/node-demo 

# /x解压
tar zxf http-test.tar.gz 