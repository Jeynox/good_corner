FROM node:lts-alpine

RUN apk --no-cache add curl

WORKDIR /app

COPY package.json  package.json
RUN npm install

COPY public public
COPY src src
COPY index.html index.html
COPY codegen.ts codegen.ts
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json
COPY tsconfig.app.json tsconfig.app.json
COPY vite.config.ts vite.config.ts

CMD npm start