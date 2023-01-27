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
    const { message, modelChoice } = req.body;
    console.log("Backend Model: ", modelChoice)
    
    const response = await openai.createCompletion({
        model: `${modelChoice}`,
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    })

    res.json({
        message: response.data.choices[0].text,
    });
})


router.route('/models2').get(async (req, res) => { 
    try { const response = await openai.listModels(); 
        res.json({ models: response.data.data })
    } 
    catch (err) { 
        res.status(500).json({ message: err.message }) 
    } 
})




export default router;