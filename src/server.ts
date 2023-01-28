import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return "Hello, world!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("***Server is running: http://localhost:3333***");
  });