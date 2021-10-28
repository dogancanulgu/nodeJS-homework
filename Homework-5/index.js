const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url; // Get Url

  if (url === "/") {
    // Index Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Index Page</h2>");
  } else if (url === "/about") {
    // About Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to About Page</h2>");
  } else if (url === "/contact") {
    // Contact Page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to Contact Page</h2>");
  } else {
    // not Found Page
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 Page not Found</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
