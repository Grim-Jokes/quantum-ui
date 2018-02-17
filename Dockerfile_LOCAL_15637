FROM node:latest

RUN apt-get update -y

RUN npm install

RUN mkdir /quantum

WORKDIR /quantum

ADD package.json .

RUN npm install

USER node