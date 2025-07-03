FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:stable-alpine
COPY --from=builder /app/dist/secret-link-frontend /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
