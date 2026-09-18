const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "UP"
        }));

        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jenkins DevOps Project</title>
        </head>
        <body>
            <h1>Jenkins CI/CD Pipeline</h1>
            <h2>Deployment Successful</h2>
            <p>This application was built and deployed using Jenkins.</p>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
