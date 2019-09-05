#!/bin/bash

# -------------------------------------------------------------------------------------------
# Author: Alex T. CEO/CTO IdeaUP
# Automatize some manual development tasks related to docker environment, unit testing, etc.
# -------------------------------------------------------------------------------------------

#Command definitions. Expect 1 parameter with the pre-defined option.
#OPTIONS:
#--------------------------------------------------------------------------------------------
#1: x -> Clean all containers. 
#2: b -> Build container using docker compose
#3: e -> Exec container using name, defined in environment variable in the container.
#4: v -> View containers.
#5: xi -> Delete docker images
#6: xi -> Start only google cloud proxy connector 
#--------------------------------------------------------------------------------------------

echo "Starting Docker Manager script... " 
echo "Argument received " $1

if [ "$1" = "xi" ] ;then
  echo "Deleting docker images (not containers)..."
  docker rmi -f $(docker images -a -q)

  echo -e "Successfully deleted all docker images"

fi

if [ "$1" = "x" ] ;then
  echo "Stopping containers..."
  docker stop $(docker ps -a -q)

  echo "Deleting containers..."
  docker rm $(docker ps -a -q)
  docker rmi -f $(docker images -a -q)

  echo -e "Containers successfully deleted."
fi

if [[ "$1" = "b" ]] ;then
  echo "Building image and creating docker container using docker compose..."
  # docker-compose -f docker-compose.common.yaml -f docker-compose.qa.yaml build && docker-compose -f docker-compose.common.yaml -f docker-compose.qa.yaml up -d
  docker-compose -f docker-compose.dev.yaml build && docker-compose -f docker-compose.dev.yaml up -d

  docker ps -a
  echo -e "Successfully created docker image and container."

fi

if [ "$1" = "e" ] ;then
  echo "Starting execution of container based on Name..."

  if [[ -z "${CONTAINER_NAME}" ]]; then
    echo "Error. The environment variable CONTAINER_NAME was not found in the container"
  else
    
    echo "Configuring Google Cloud Proxy..."
    cd ../gcloud/
    chmod +x install-google-cloud-proxy-dev.sh
    chmod +x start-cloudsql-proxy-dev.sh

    ./install-google-cloud-proxy-dev.sh
    start-google-cloud-proxy-dev.sh

    echo "Executing container name -> " ${CONTAINER_NAME}
    docker exec -ti ${CONTAINER_NAME} /bin/bash
  fi

fi



