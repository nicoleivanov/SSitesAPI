FROM mhart/alpine-node:9.2

WORKDIR /usr/app
#  Set the working directory to /usr/app

COPY . .

RUN yarn install
# RUN yarn build

EXPOSE 8000
# Make port 8000 available to the world outside this container

CMD node ./src/index.js
#  Run the app index file when the container launches