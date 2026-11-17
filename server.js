require("http").createServer((q, r) => r.end(`Hello from DeployForge v1 (${process.env.GREETING || "no GREETING set"})\n`)).listen(process.env.PORT || 8080);
