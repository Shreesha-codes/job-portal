import express from 'express';
import cors from 'cors';
import 'dotenv/config';



// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Api working');
});

//port
const PORT = process.env.PORT || 5000;

// Start server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});