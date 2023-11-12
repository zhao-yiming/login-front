FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", ".js"]
EXPOSE 8080