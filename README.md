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

## Dev Diary

### What is a day?

I'm only working for like 1-2 hours per day as to spread out the work. I plan to spend 8 - 10 hours on this challenge before calling it.

### Day 1

This phase consists of only setup. I am installing docker, and other dependencies. There is no reason for me choosing specific versions of technologies, usually its just default. I got docker to build and run in like 20 seconds, which feels good. The next part is getting a basic structure for the app up and running. This means I need to install some sort of fetch library, I'm choosing `axios` because I'm semi familiar. The `fetch` api is good, but I don't use it enough to not go with what I'm familiar with. The next part is actually getting giphy to communicate with my application. This means actually sending a request and getting some sort of response back. I also am adding redux at this point to get config out of the way.

### Day 2

Added redux basic skeleton which will hold the state of the application. My first pass at the design, redux will hold a list of simplified giphy objects, something like `{id: giphyId, imageUrl: giphyImageUrl, weirdnessScore: giphyWeirdessScore}`. I also figured out what was going on with my requests. Pretty much there was a strange decode thing going on with my JSON parsing. All fixed now. Next I added the basic skeleton of the form. I will not be using a form library, instead I'll just use hooks to solve all the things. I would usually reach for `formik` or `redux-form`, but I'm just gonna try this first. I also fixed the endpoint I was hitting for the giphy api. Instead of search or gifs or random, I am now using the 'translate' endpoint. This endpoint is pretty simple in that it takes 3 things, my api_key, search_term and a weirdness score. I've exported the request into a `request_service.js` file that will help me handle all requests, including errors and whatnot.

### Day 3
