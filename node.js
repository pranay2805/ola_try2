const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Import CORS for cross-origin requests
const app = express();
const port = process.env.PORT || 3000;

// Allow CORS for all requests
app.use(cors());

// Ola API credentials
const apiKey = '96121212f12ff12f12f1f12f1f12fe2';
const appToken = 'fd5d6121212f12ff12f12f1f12f1f12fa';

app.get('/getOlaRideOptions', async (req, res) => {
    try {
        const url = "https://devapi.olacabs.com/v1/products?pickup_lat=12.8953741&pickup_lng=77.5859018&drop_lat=12.9560643&drop_lng=77.6514801&service_type=p2p&category=auto";
        
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'x-app-token': appToken,
                'Content-Type': 'application/json'
            }
        });

        // Sending back the data from Ola API
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Ola API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Ola API' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
