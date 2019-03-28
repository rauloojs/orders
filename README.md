# Orders project

## Working example

![](/assets/example.gif)

You can run Compose on macOS, Windows, and 64-bit Linux.

## Prerequisites

Docker Compose relies on Docker Engine for any meaningful work, so make sure you have Docker Engine installed either locally or remote, depending on your setup.

On desktop systems like Docker Desktop for Mac and Windows, Docker Compose is included as part of those desktop installs.

On Linux systems, first install the [Docker](https://docs.docker.com/install/#server) for your OS as described on the Get Docker page, then come back here for instructions on installing Compose on Linux systems.

To run Compose as a non-root user, see [Manage Docker as a non-root user](https://docs.docker.com/install/linux/linux-postinstall/).

### Install Docker Desktop for Mac

To download Docker Desktop for Mac, head to [Docker Hub](https://docs.docker.com/docker-for-mac/install/).

## About docker-compose files

There is a base `docker-compose.yml` file which needs to be used along with `docker-compose.dev.yml` and `docker-compose.prod.yml`, depending on desired environment.

There are handful commands in Makefile for all of the tasks.

## Running the project

First you have to build the services:

```bash
make build_prod
```

Which is a shortcut for

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```

Then let's get services up:

```bash
make up_prod
```

Or

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

There are also commands for running development servers:

```bash
make build
make up
```

After running `build` and `up` commands, `nginx server` will be exposed on port `80` for prod and `8080` for dev. You should be able to access http://localhost and see the react frontend running (wait for it to finish building the project).

## Creating first user

While docker-compose is up, run:

```bash
make createsuperuser
```

or

```bash
docker-compose exec backend python manage.py createsuperuser
```

Now you should be able to login with provided credentials and test the site.

## Other commands

### Make migrations

```bash
make makemigrations
```

### Migrate

```bash
make migrate
```

## About services

### db

Based on postgres:11.2 image. For the purpose of this project, this one works well but it's not meant to be used in production environments (further configuration would be needed). Also it would be ideal to use a remote DB.

### backend, redis and worker_channels

Based on python:3.7-alpine, `backend` runs Django project. Backend is served on daphne for production environment.

`redis and worker_channels` are needed for Django channels to work and send messages to specific channel.

### frontend

Based on node:11.12. Serves development server or builds production bundle, depending on environment.

### nginx

Based on nginx:latest. This one works as proxy to route incoming requests either to frontend, backend or websocket.

## Backend docs

Head to [backend README](https://github.com/rauloojs/orders/blob/master/Backend/README.md)

## Frontend docs

Head to [frontend README](https://github.com/rauloojs/orders/blob/master/Frontend/README.md)
