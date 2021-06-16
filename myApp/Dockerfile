# build stage 打包阶段
# 本地环境
# FROM node:12-alpine AS build
# 生产环境
FROM harbor.dev.wh.digitalchina.com/library/node as build
WORKDIR /app
COPY ./package.json ./
RUN yarn config set registry http://registry.npm.taobao.org/
RUN yarn config set strict-ssl false \
  && yarn install
COPY . .
RUN yarn build

# ng stage ngnix serve 静态文件阶段
# 本地环境
# FROM nginx:alpine
# 生产环境
FROM harbor.dev.wh.digitalchina.com/appmall/nginx-node:1.0.0
RUN rm -rf /etc/nginx/nginx.conf
WORKDIR /etc/nginx
COPY nginx.conf .
WORKDIR  /usr/share/nginx/frontend
COPY --from=build /app/build .
# 关闭nginx后台运行，让nginx进程成为docker启动的依据
CMD cd / && nginx -g "daemon off;"
EXPOSE 80
#开放80端口
