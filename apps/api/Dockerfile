FROM node:lts AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run prisma:generate
RUN npm run build

FROM node:lts AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --ignore-scripts --production

COPY --from=development /usr/src/app/dist ./dist
# COPY --from=development /usr/src/app/node_modules/.prisma ./node_modules/.prisma