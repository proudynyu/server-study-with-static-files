# Server Study

This is a study using native http module from node to create and handle a server connection with a REST API.
The idea is to understand how libraries like Express/Fastify creates the server and handles the diferent routes creation and middlewares creation.

## Why do that?

Because i want to understand and create something that i can use without downloading a server lib like Express/Fastify (not that is a problem, but i want to learn).

## Current Deps

- tsx
- typescript
- @types/node

Could be running using Deno or Bun if dont want to install the deps, but i dont care right now.

## Running

```console
- npm i && npm run dev
```

### Implemented

For now, just the route creation is implemented, but not the middlewares to handle pre-request to the api route (like parsing json, static-files & etc)

### Need To Implement

- [ ] parsing json
- [ ] middlewares in general on pre-request
- [ ] static-files
