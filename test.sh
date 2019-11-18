#!/bin/bash
# npm  install 
if [ $(docker container ls -q -a --filter name=my_app_node_container ) != '' ];then
 docker container stop my_app_node_container
 docker container rm my_app_node_container 
fi 
if [ $(docker image ls -q -a --filter reference=my_app_node ) != '' ];then
docker image rm my_app_node 
fi
 docker build -t my_app_node .

 docker run -itd -p 5000:4000 --name my_app_node_container my_app_node