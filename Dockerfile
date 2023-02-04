FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apt-get -qy update && apt-get -qy install openssl

# install dependencies
RUN npm install --force

COPY . .
RUN npx prisma generate


# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:migrate:doc" ]

