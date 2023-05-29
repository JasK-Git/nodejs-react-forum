FROM node:lts
WORKDIR /backend
COPY . .
#RUN rm -rf node_modules
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
