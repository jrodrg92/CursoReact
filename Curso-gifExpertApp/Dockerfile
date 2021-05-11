FROM node:13.12.0-alpine as build
# set working directory
WORKDIR /app4-gifexpertapp

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app4-gifexpertapp/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine

RUN rm /usr/share/nginx/html/index.html
COPY --from=build /app4-gifexpertapp/build /usr/share/nginx/html

# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN ls /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

