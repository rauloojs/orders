#!/usr/bin/env bash

# Depending on current environment use daphne or runserver to serve project
if [ "$ENVIRONMENT_NAME" = "prod" ]; then
  python manage.py migrate
  python manage.py collectstatic --no-input

  daphne -b 0.0.0.0 -p 8000 api.asgi:application
fi
  python manage.py migrate
  python manage.py runserver 0.0.0.0:8000
