.env file structure:

REDIS_HOST="redis"
REDIS_PORT="6379"


POSTGRES_DB="dataBase"
POSTGRES_USER="postgres"
POSTGRES_PASSWORD="password"


DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB}?schema=public"
