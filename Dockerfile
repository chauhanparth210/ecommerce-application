FROM node:10.24.0

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

CMD ["npm","run","serve"]