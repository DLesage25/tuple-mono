FROM node:16-alpine AS deps 

RUN apk add --no-cache libc6-compat

# node-gyp requires python to be installed
RUN apk add --update python3 make g++\
    && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm ci

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV development

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

COPY --from=builder /app/apps/api/.env ./

USER node

EXPOSE 3000

ENV PORT 3000

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