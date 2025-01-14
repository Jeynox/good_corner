FROM alpine:latest

WORKDIR /app

COPY package.json  package.json
RUN npm install

COPY src src
COPY index.html index.html
COPY tsconfig.json tsconfig.json

CMD npm start