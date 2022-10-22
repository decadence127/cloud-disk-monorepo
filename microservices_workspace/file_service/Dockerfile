FROM node:13.12.0-alpine

WORKDIR /
COPY package.json ./
RUN npm install 
COPY ./ ./

CMD ["npm", "run" ,"dev"]