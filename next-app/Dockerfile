FROM node:20.10.0-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 3000
CMD ["yarn", "dev"]
