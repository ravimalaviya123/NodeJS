FROM node:18

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

Expose 3000

CMD [ "npm", "start" ]
