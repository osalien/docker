# 依赖pm2镜像
FROM keymetrics/pm2:latest-alpine 

# 定义作者
MAINTAINER yuanzhao <me@osalien.com>

# Bundle APP files
RUN mkdir -p /var/www/OSALIEN/frontend
WORKDIR /var/www/OSALIEN/frontend
 
# Bundle app source
COPY . /var/www/OSALIEN/frontend
RUN npm install

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

EXPOSE 3007 
CMD [ "pm2-runtime", "start", "process.json" ]