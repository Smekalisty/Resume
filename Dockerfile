FROM node:16.14.0-alpine as builder

WORKDIR /app

COPY package.json .
COPY . .

RUN npm install --silent

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html