FROM node:latest

RUN mkdir -p /quantum
# Create app directory
WORKDIR /quantum

ADD package.json /quantum/

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install
