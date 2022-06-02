FROM node:14-alpine

RUN apt-get update

WORKDIR /frontend
COPY ../frontend/packege.json /frontend
RUN npm install
RUN npm install expo-cli --global