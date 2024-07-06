const express = require('express');
const qrcode = require('qrcode');

const app = express();
const port = 5000;

// Endpoint to generate QR code
app.get('/qrcode', async (req, res) => {
    try {
        const qrCodeURL = req.query.url; // Assuming you pass the URL as a query parameter

        if (!qrCodeURL) {
            return res.status(400).json({ error: 'Missing URL query parameter' });
        }

        // Generate QR code
        const qrCode = await qrcode.toDataURL(qrCodeURL);

        // Respond with the QR code image data URL
        res.send(`<img src="${qrCode}" alt="QR Code">`);
    } catch (err) {
        console.error('Error generating QR code:', err);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
