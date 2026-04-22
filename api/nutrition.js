export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'query is required' });

  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=1&api_key=${process.env.USDA_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(response.status).json(data);
}
