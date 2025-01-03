FROM node:20-alpine AS base

WORKDIR /app


COPY package.json package-lock.json* ./


RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

# here i copy only the necessary files from the base stage
COPY --from=base /app/package.json /app/package-lock.json* ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules


EXPOSE 3000


CMD ["npm", "start"]