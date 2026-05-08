FROM node:18-slim

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install

COPY . .

EXPOSE 5000

CMD ["pnpm", "start"]