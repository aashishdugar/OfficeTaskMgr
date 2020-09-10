
# stage 1
FROM node:alpine as BUILD
WORKDIR '/app'
COPY package.json
RUN npm install
COPY ..
RUN npm run build --prod

# stage 2
FROM nginx
EXPOSE 80
COPY --from=BUILD /app/dist/dealBook-app /usr/share/nginx/html