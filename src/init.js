import app from "./server.js";

const PORT = 4000;

const onListen = () => console.log(`Start Express Server 🚀 http://localhost:${PORT}`);

app.listen(PORT, onListen);