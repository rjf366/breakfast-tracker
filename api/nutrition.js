module.exports = async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'query is required' });

  try {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=1&api_key=${process.env.USDA_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
