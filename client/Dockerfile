FROM node:14.18.0

WORKDIR /app

COPY . .

RUN npm install

RUN sed -i 's/localhost/server/g' package.json
RUN sed -i ''-e '/standard/d' package.json
RUN sed -i '30s/,//g' package.json

EXPOSE 3000

CMD ["npm", "start"]
