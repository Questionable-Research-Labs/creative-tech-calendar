FROM node:15.7.0
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm install webpack -g
COPY . .
RUN npm run build:prod
CMD [ "node", "./src/index.js" ]

