import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser:true // This is the default and can be omitted
});

export default openai