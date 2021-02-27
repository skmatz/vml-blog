FROM node:lts

WORKDIR /src
COPY package.json yarn.lock ./
RUN yarn install
