FROM node:20-alpine
WORKDIR /app/frontend
COPY package*.json ./

RUN npm install --registry=https://registry.npmmirror.com
COPY . .
ARG VUE_APP_ADRESS
ENV VUE_APP_ADRESS=${VUE_APP_ADRESS}
EXPOSE 5173
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0","--port", "5173"]
