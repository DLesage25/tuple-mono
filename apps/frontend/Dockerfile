FROM node:17.1.0-alpine3.12 AS dependencies
ENV NODE_ENV=development
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --update python3 make g++\
    && rm -rf /var/cache/apk/*
RUN npm ci

FROM node:17.1.0-alpine3.12 AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:17.1.0-alpine3.12 AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --chown=node --from=builder /app/dist/apps/frontend ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
CMD [ "npm", "start" ]