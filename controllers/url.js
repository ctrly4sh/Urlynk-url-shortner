const shortid = require('shortid');
const URL = require('../models/url');

async function generateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' });

    const generatedShortId = shortid.generate(); // Renamed the variable to avoid naming conflict

    try {
        await URL.create({
            shortId: generatedShortId, // Changed variable name here as well
            redirectUrl: body.url,
            visitHistory: []
        });

        return res.json({ id: generatedShortId });
    } catch (error) {
        console.error('Error creating short URL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    generateNewShortURL
};
