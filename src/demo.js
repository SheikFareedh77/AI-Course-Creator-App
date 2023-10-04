import React, { useEffect } from 'react';
import { OpenAIApi, ChatCompletionCreateRequest } from 'openai';

function YourComponent() {
  useEffect(() => {
    // Set your OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;
    const openai = new OpenAIApi({ apiKey });

    // Define a function to get completions
    async function getCompletion(prompt, model = "gpt-3.5-turbo") {
      const messages = [{ role: "system", content: "You are a helpful assistant that translates Python to JavaScript." }];
      messages.push({ role: "user", content: prompt });

      const requestPayload = new ChatCompletionCreateRequest({
        model: "dslearning",
        messages: messages,
        temperature: 0, // This controls the randomness of the model's output
      });

      const response = await openai.createChatCompletion(requestPayload);
      console.log("Completion for Text 1:");
      console.log(response.choices[0].message.content);
    }

    const text1 = `
    {Making a cup of tea is easy! First, you need to get some
    water boiling. While that's happening,
    grab a cup and put a tea bag in it. Once the water is
    hot enough, just pour it over the tea bag.
    Let it sit for a bit so the tea can steep. After a
    few minutes, take out the tea bag. If you
    like, you can add some sugar or milk to taste.
    And that's it! You've got yourself a delicious
    cup of tea to enjoy.}
    `;

    const prompt = `
    You will be provided with text delimited by triple quotes.
    If it contains a sequence of instructions,
    Create a course for making tea in the following format:

    Question -
    Answer in multiple choice
    re-write those instructions in the following format:

    """${text1}"""
    `;

    // Call the getCompletion function when the component mounts
    getCompletion(prompt);
  }, []); // The empty dependency array ensures this code only runs once on mount

  return (
    <div>
      {/* Your React component JSX */}
    </div>
  );
}

export default YourComponent;
