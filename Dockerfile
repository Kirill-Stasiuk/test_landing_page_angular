FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/test-landing-page /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]