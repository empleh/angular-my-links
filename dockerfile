# stage 1

FROM node:alpine AS my-app-build

# set working directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/

# RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
RUN ["npm","install"]

COPY . /app

EXPOSE 4201/tcp

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]