export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: `You are a helpful assistant for a home care agency intake form. The user has typed the following message but may have spelling errors or broken english. Please rewrite it clearly and professionally while keeping their exact meaning. Only return the rewritten text, nothing else.\n\nOriginal: ${text}`
        }]
      })
    });
    const data = await response.json();
    const improved = data.content[0].text;
    res.status(200).json({ improved });
  } catch (err) {
    res.status(500).json({ error: 'Failed to improve text' });
  }
}
