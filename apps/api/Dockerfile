FROM node:16-alpine AS dependencies 
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN apk add --update python3 make g++\
    && rm -rf /var/cache/apk/*
COPY package.json package-lock.json ./ 
RUN npm ci

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV development
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
COPY --chown=node --from=builder /app/apps/api/.env ./
COPY --chown=node --from=builder /app/dist/apps/api ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
CMD ["node", "main.js"]

# WORKDIR /usr/src/app

# COPY ["/dist/apps/api", "."]
# COPY ["package.json", "package-lock.json", "./"] 

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# RUN npm ci
# RUN npm install reflect-metadata tslib @nestjs/platform-express

# USER node
# CMD ["dumb-init", "node", "main.js"]