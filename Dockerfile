FROM node:15.7.0
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm install webpack -g
COPY . .
RUN npm run build:prod
EXPOSE 8080
CMD [ "node", "./src/index.js" ]

