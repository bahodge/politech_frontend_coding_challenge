# Politech Frontend Developer Coding Challenge

## Build the docker image

This command builds the docker image as a nice production version.

- `docker build . -t bhodge/politech_frontend_coding_challenge`

## Run the docker image

This command runs the docker image on your localhost on port 8080

- `docker run -p 8080:80 bhodge/politech_frontend_coding_challenge:latest`

## Alternate Running

- If you don't have docker, you can just run the application using `npm start`. This will open the application in development mode, but I'm sure thats cool.

## Open your browser

- [localhost:8080](http://localhost:8080)