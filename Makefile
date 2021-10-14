build:
	sudo docker build -t site-frontend:latest .

test: build
	sudo docker run -it --rm site-frontend:latest npm test

launch: build
	npm run build
	sudo docker run -it --rm -p 80:80/tcp site-frontend:latest
