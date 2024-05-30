// Import required modules
const express = require('express'); // Express for serving static files and handling HTTP requests
const path = require('path'); // Path for handling and transforming file paths
const WebSocket = require('ws'); // WebSocket for real-time communication

// Initialize an Express application
const app = express();
const PORT = 3000; // Define the port the server will listen on

// Serve static files from the current directory
app.use(express.static(path.resolve(__dirname)));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


// Start the HTTP server and listen on the specified port
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Initialize a WebSocket server using the same HTTP server
const wss = new WebSocket.Server({ server });


/**
 * REFERENCE :
 * https://www.npmjs.com/package/websocket
 * 
 * 
 * Event handler for new WebSocket connections
 * encapsulate the two event handler for incoming and closing connetion
*/

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    // Event handler for receiving messages from clients
    ws.on('message', function incoming(message) {
        
        const decodedMessage = message.toString('utf-8'); // Decode the buffer to a string
        console.log('Received message:', decodedMessage);

        // Broadcast the received message to all other connected clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(decodedMessage);
            }
        });
    });

    // Event handler for when a client disconnects
    ws.on('close', function close() {
        console.log('Client disconnected');
    });

});
