import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();

app.register(cors);

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
