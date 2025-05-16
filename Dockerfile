FROM node:20

WORKDIR /app

COPY script.js .

COPY package.json .
RUN npm install
COPY script.js .

CMD ["node", "script.js"]