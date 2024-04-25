// Specifes Node version
FROM node:14-alpine

// Sets working directory
WORKDIR /app

// Copies package.json from the directory
COPY package.json ./

// Runs npm install to add all the dependencies in package.json
RUN npm install

// Once the install is done it will copy everything over
COPY ./ ./

// Creates a build of the front end
RUN npm run build

// Exposes port 3000 for front end deployment
EXPOSE 3000

// Uses command to run NPM START, thus starting the application
CMD [ "npm", "start"]
