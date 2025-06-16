
FROM node:18-alpine 

#Katalog roboczy
WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install --production

COPY . .

ENV PORT = 8080

RUN npm run build

CMD ["npm" , "start"]