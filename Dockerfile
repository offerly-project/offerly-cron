FROM node:lts

WORKDIR /app

COPY *.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]