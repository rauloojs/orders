up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

up_prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

down:
	docker-compose down

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build

build_prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml build

# The following commands should be executed once docker-compose is up
migrate:
	docker-compose exec backend python manage.py migrate

makemigrations:
	docker-compose exec backend python manage.py makemigrations

createsuperuser:
	docker-compose exec backend python manage.py createsuperuser
