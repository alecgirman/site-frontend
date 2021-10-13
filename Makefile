build:
	sudo docker build -t site-frontend:latest .

launch: build
	sudo docker run -it --rm -p 80:80/tcp site-frontend:latest