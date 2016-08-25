FROM node:5.12
WORKDIR /app
ADD bin /app/bin
ADD public /app/public
ADD package.json /app/package.json
ADD index.html /app/index.html
RUN npm install

EXPOSE 3000
CMD ["npm","start"]