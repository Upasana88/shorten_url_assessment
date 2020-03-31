# => Build container
FROM node:10-alpine as build

WORKDIR /short-url-app

COPY package.json /short-url-app/package.json

RUN npm install

RUN npm install react-scripts -g

COPY . /short-url-app

RUN npm run build

# => Run container
FROM nginx:1.16.0

COPY --from=build /short-url-app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

#COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 3000

# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]