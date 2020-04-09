<img src="./client/public/favicon/favicon-72.png" alt="JS Box logo" style="float: left;"/>

# JS Box

JS Box is a bolierplate Docker for MERN (MongoDB + Express + React + Node) OR MEAN (MongoDB + Express + Angular + Node), all served by Nginx.

It is prepared to run both in **development** as in **production** mode, so you can easily create your project with a ready-made base. This should speed up the creation of Node apps using any of these stacks.

In the development mode, both server and client files are updated in Docker as they are changed in your host machine.

In the production mode, React is compiled and the static files are served through Nginx.

# Configuration

To configure JS Box, make a copy of `.env example` and save it as `.env` and change the configurations to suit your needs.

```
### development OR production
JS_BOX_ENVIRONMENT=production # development allows live reloading of client and server
JS_BOX_NGINX_PORT=80          # the Docker port that will be accessible on the host
JS_BOX_NGINX_HOST=localhost   # the URL of the system
JS_BOX_MONGODB_PORT=9090      # The port to be able to access MongoDB on the host
```

## Available external ports

Nginx main server accessible on the port defined in JS_BOX_NGINX_PORT

MongoDB accessible on the port defined in JS_BOX_MONGODB_PORT

# Running

After configuring the system, simply run

```
docker-compose up --build -d
```

Docker will build the images and containers and run in the background.

To stop the containers, run

```
docker-compose stop
```


If you want to delete ALL images and containers from Docker, you can run

```
docker system prune -a
```

# Available scripts

While the containers are running you can easily access them using the provided `.bat` (Windows) or `.sh` (Unix) scripts.

# Log files

Log files generated by the servers running on Docker will be also accessible on the host in the `logs` folder.

Each server saves logs in their specific folder.
