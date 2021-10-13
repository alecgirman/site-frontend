FROM node:latest
WORKDIR /code
COPY . /code
RUN npm install
RUN npm run build
EXPOSE 80
CMD npx serve -l 80 -s build
# CMD ["npx", "serve", "-l", "80", "-s", "build"]