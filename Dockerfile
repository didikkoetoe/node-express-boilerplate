FROM node:24-alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./

USER node

RUN HUSKY=0 yarn install --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 3000
