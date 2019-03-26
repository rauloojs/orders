DEV := "-f docker-compose.yml -f docker-compose.dev.yml"

up:
	docker-compose $$(DEV) up

down:
	docker-compose down

build:
	docker-compose $$(DEV) build

migrate:
	docker-compose $$(DEV) run backend python manage.py migrate

backend_bash:
	docker-compose $$(DEV) run --rm backend /bin/bash

frontend_bash:
	docker-compose $$(DEV) run --rm frontend /bin/bash

nginx_bash:
	docker-compose $$(DEV) run --rm nginx /bin/bash
