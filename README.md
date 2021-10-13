## Starting the server using the Makefile

First, the backend server must be started.  See the README in the backend repo for more information.  Then, you can use the following to launch the frontend server

`sudo make launch`


## Without using the Makefile

To start the server without using the provided Makefile, then run the following commands:

1. Build the Docker container

`sudo docker build -t site-frontend:latest .`

2. Launch the HTTP server

`sudo docker run -it --rm -p 80:80/tcp site-frontend:latest`