FROM node:8.6.0-alpine

ENV HOST "juneil.me"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 5555
CMD [ "npm", "start" ]