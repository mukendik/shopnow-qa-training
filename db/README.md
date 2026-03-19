# ShopNow Database

This branch introduces the PostgreSQL database setup for ShopNow.

## Start the database

docker compose -f docker/docker-compose.yml up -d

## Connect to the database

docker exec -it shopnow_postgres psql -U shopnow -d shopnow_db