FROM node:10-alpine

# Create app directory
WORKDIR /short-url-app-backed

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3010

CMD [ "npm", "start" ]