const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function categorizePrompt(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Categorize this prompt strictly into one of the following categories:
          - Content Writing
          - Code Generation
          - Data Analysis
          - Creative Writing
          - Marketing
          - Research
          - Education
          - Business

          Only return the category name exactly as written above, nothing else.
          Prompt: "${prompt}"`,
        },
      ],
      max_tokens: 10,
    });

    const category = response.choices[0].message.content.trim();
    return category;
  } catch (error) {
    console.error("AI categorization error:", error);
    return "Uncategorized";
  }
}

module.exports = categorizePrompt;