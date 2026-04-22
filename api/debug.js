module.exports = async function handler(req, res) {
  const key = process.env.USDA_API_KEY;
  res.status(200).json({
    keyDefined: !!key,
    keyLength: key ? key.length : 0,
    keyPreview: key ? key.slice(0, 4) + '...' : null,
  });
};
