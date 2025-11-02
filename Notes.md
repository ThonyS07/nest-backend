[GET]http://localhost:3001
Hello World!
[GET]http://localhost:3001/users => return all users (200)
[GET]http://localhost:3001/users/:id => return user with id (200)

[POST]http://localhost:3001/users => return created user (201)
[PUT]http://localhost:3001/users/:id => return updated user (200)
[DELETE]http://localhost:3001/users/:id => return status deleted user (200)

# Docker

docker compose up -d # Start the services in the background
docker compose down # Stop the services
docker compose down -v # Stop the services and remove the volumes
docker compose ps # List the services
