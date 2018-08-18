# create a file named Dockerfile
FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN cat package.json
RUN npm install
COPY . /app
EXPOSE 4000
CMD ["npm", "start"]