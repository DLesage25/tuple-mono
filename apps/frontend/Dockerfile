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
RUN NODE_ENV=production npm run build

FROM node:17.1.0-alpine3.12 AS production
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
COPY --chown=node --from=builder /app/next.config.js ./
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=builder /app/.next ./.next
COPY --chown=node --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD [ "npm", "start" ]