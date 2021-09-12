FROM node:14.17.4

WORKDIR /root

COPY package*.json ./

RUN ["npm", "i"]

COPY . .

ENV NODE_ENV=development

ENTRYPOINT ["npm", "run", "dev"]