FROM node:latest
WORKDIR /code
COPY . /code
RUN npm install --verbose
RUN npm run build
EXPOSE 80
CMD npx serve -l 80 -s build