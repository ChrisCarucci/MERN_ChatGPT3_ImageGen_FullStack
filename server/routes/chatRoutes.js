import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
const openai = new OpenAIApi(configuration);



router.route('/chat').post(async (req, res) => {
    const { message } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    })

    res.json({
        message: response.data.choices[0].text,
    });
})

router.route('/models').get(async (req, res) => {
    const response = await openai.listEngines();
    res.json({
        models: response.data.data
    })
})




export default router;