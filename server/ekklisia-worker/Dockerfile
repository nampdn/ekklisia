FROM node:latest

USER root

# RUN apk add python musl git make gcc g++
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY ./patches ./patches
RUN yarn install
# RUN yarn add leveldown --build-from-source

# FROM node:alpine

# WORKDIR /usr/src/app
# RUN mkdir /repos
# VOLUME /repos
# COPY --from=dep /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn compile

EXPOSE 7070

ENTRYPOINT ["yarn"]
CMD ["server:prod"]
