# Politech Frontend Developer Coding Challenge

## Build the docker image

This command builds the docker image as a nice production version.

- `docker build . -t bhodge/politech_frontend_coding_challenge`

## Run the docker image

This command runs the docker image on your localhost on port 8080

- `docker run -p 8080:80 bhodge/politech_frontend_coding_challenge:latest`
- [localhost:8080](http://localhost:8080)

## Alternate Running

- `npm install`
- If you don't have docker, you can just run the application using `npm start`. This will open the application in development mode, but I'm sure thats cool.
- [localhost:8080](http://localhost:8080)

## Dev Diary

### What is a day?

I'm only working for like 1-2 hours per day as to spread out the work. I plan to spend 8 - 10 hours on this challenge before calling it.

### Day 1

This phase consists of only setup. I am installing docker, and other dependencies. There is no reason for me choosing specific versions of technologies, usually its just default. I got docker to build and run in like 20 seconds, which feels good. The next part is getting a basic structure for the app up and running. This means I need to install some sort of fetch library, I'm choosing `axios` because I'm semi familiar. The `fetch` api is good, but I don't use it enough to not go with what I'm familiar with. The next part is actually getting giphy to communicate with my application. This means actually sending a request and getting some sort of response back. I also am adding redux at this point to get config out of the way.

### Day 2

Added redux basic skeleton which will hold the state of the application. My first pass at the design, redux will hold a list of simplified giphy objects, something like `{id: giphyId, imageUrl: giphyImageUrl, weirdnessScore: giphyWeirdessScore}`. I also figured out what was going on with my requests. Pretty much there was a strange decode thing going on with my JSON parsing. All fixed now. Next I added the basic skeleton of the form. I will not be using a form library, instead I'll just use hooks to solve all the things. I would usually reach for `formik` or `redux-form`, but I'm just gonna try this first. I also fixed the endpoint I was hitting for the giphy api. Instead of search or gifs or random, I am now using the 'translate' endpoint. This endpoint is pretty simple in that it takes 3 things, my api_key, search_term and a weirdness score. I've exported the request into a `request_service.js` file that will help me handle all requests, including errors and whatnot.

### Day 3

Added base skin and fixed a bunch of redux issues across the application. I can totally see how this can get unmanageable. I am starting to see one of my early mistakes now where I am trying to manage so much state on components that are far up the tree. This is causing me to do a ton of props drilling. This is one of the things that I'm not liking about this one. Made the request serves more robust and handle errors a little better. Right now the rules are that if I don't get a result I like, then I just set some state for an error result.

### Day 4

This is the only real day I can work on this application. The previous days have been "work for 25-30 mins" kind of days. Focusing on adding some basic styling as I am not a designer. Added a more solid workflow for liking and unliking gifs. As of now, you can't really unlike a gif. This may change later. I added a 'calculated' view which shows the final result. The state is not persisted on refresh and I took very few liberties with the overall design. Made `request_service.js` more rubust and help me handle getting bad results.

**Update:** I ran out of time before I could add tests. The application I do believe is feature complete and meets all the requirements.

## Post Mortem

### What went well :smiley: ?

Overall, getting the config and the application up and running went surprisingly well. I've never really work intricately with redux but getting over the initial hump of 'only one source of truth' made it pretty simple to work with later. I'm sure I am barely exploring and taking advantage of it's capabilities. One thing I'm pretty proud of is using hooks. I could have used more hooks like `useEffect()` which now that I'm seeing it would have made my life way easier. I also was able to implement a completely new component library that I'd never used before to help me with layout and styling. Overall, the project took around 8 or so hours of real dev work.

### What as a dumpster fire :fire: ?

When I had started this project I wanted to have redux be the central point and whenever redux would be updated, the new state would trickle down like a calm stream throughout the application. Instead, I was met with state inconsistencies across the board because I was using a ton of state in both my components as well as redux. I think I went too far into the typical OOP pattern that I'm so used to and tried to apply concepts that shouldn't have been applied. This meant that I was constantly drilling my props through a twisted web of components just to get a boolean to flip if I needed it to. It was a huge mess. I think that what I really should have done was to lean on redux more and have redux be in charge of notifying the app/components of changes.

### How to improve :hammer: ?

I am not very used to working with react as a fully self contained application. Most react applications I write are super dumb and only act as rendering layers. I would definitely use more better organization of the application. I think the hierarchy I ended up with was ok, but there would be now way to scale it well. `LikeButton.js` as well as `LikedGifs.js` should for sure be rewritten. `LikeButton.js` requires too much outside input and is also responsible for way too much. `LikedGifs.js` is also responsible for far more than it needs to be. Use way more helper object and files would be better. Right now I'm only using a form sanitizer but to have some components that acted as data objects that I could just pass around would have been nice. Some more stuff would be to add better external service error handling, so if Giphy was down, handle that. As of now, I only handle the case that Giphy sends you a no results array.

### Overall

As always, I think I learned a ton and really enjoyed working on this. It has helped me identify what I'm weaker at and what I think I should improve on. Thanks again for letting me do this.
