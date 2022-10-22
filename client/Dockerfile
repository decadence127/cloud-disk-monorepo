FROM nginx:1.17
RUN apt-get update && apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y \
  nodejs
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
COPY build/ /usr/share/nginx/html

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]