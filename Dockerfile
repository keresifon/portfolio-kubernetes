
FROM node:14-alpine AS builder
WORKDIR /web
COPY package*.json /web/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.31.3-alpine3.24-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /web/build /usr/share/nginx/html