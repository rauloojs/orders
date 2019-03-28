FROM node:11.12

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY . ./
