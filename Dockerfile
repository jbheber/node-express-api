
FROM node:10

ENV ENV live

RUN mkdir /app
WORKDIR /app
COPY package.json /app

RUN npm install -g pm2
RUN npm install

COPY . /app
CMD npm run start:live

EXPOSE 3000
