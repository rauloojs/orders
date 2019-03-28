# Backend

## Folder structure

This project was bootstraped using Django. It follows the standard convention.

You will find project code in `/src`.

App name is `api`, code is in `/src/app`.

Orders code (including consumer) is in `/src/orders`.

## Running django commands

You have to execute them using docker-compose:

```bash
docker-compose exec backend python manage.py $COMAND
```

## Dependencies

- **Django**
- **psycopg2** for DB connection
- **djangorestframework** for RESTful API
- **channels + channels_redis + daphne** for channels communication
- **whitenoise** to serve static files
- **django-phonenumber-field + phonenumbers** as better phone number field
