FROM node:lts-slim@sha256:f8b7f44cb0987ba4b5a63da2dd9d9303f06e0fb6c3366821a86e2ef49ca92b82

RUN apt-get -qy update && apt-get -qy install openssl dumb-init

WORKDIR /usr/src/app

COPY ["/dist/apps/api", "."]
COPY ["package.json", "package-lock.json", "./"] 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm install --production
RUN npm install reflect-metadata tslib @nestjs/platform-express

USER node
CMD ["dumb-init", "node", "main.js"]