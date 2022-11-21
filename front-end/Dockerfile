FROM node:alpine
WORKDIR /coffee-app
COPY ./package.json /coffee-app
RUN npm i
COPY . .

CMD npm start