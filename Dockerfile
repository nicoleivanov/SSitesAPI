# The Dockerfile is a text file with a list of commands that the Docker client calls while creating an image.  It automates the image creation process.

FROM mhart/alpine-node:9.2
# Start building an image from a base image: minimal node.js image built on Alpine Linux

WORKDIR /usr/app
#  Set the working directory to /usr/app

COPY . .
# ?Copy the current directory into the container?

RUN yarn install
# RUN yarn install

EXPOSE 8000
# Make port 8000 available to the world outside this container

CMD node ./src/index.js
#  Run the app's index file when the container launches to run the application