const Koa = require("koa");

const app = new Koa();

// Response
app.use((ctx) => {
  const url = ctx.url;

  if (url === "/") {
    // Index Page
    ctx.body = "<h1>Welcome to Index Page</h1>";
  } else if (url === "/about") {
    // About Page
    ctx.body = "<h1>Welcome to About Page</h1>";
  } else if (url === "/contact") {
    // Contact Page
    ctx.body = "<h1>Welcome to Contact Page</h1>";
  } else {
    // not Found Page
    ctx.body = "<h1>404 Page not Found Page</h1>";
  }
});

const port = 3000;

app.listen(port);
