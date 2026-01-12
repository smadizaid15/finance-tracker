const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/finance';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


const TransactionSchema = new mongoose.Schema({
  text: String,
  amount: Number, 
  createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);


app.get('/api/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.json({ data: transactions });
});

app.post('/api/transactions', async (req, res) => {
  const transaction = await Transaction.create(req.body);
  res.status(201).json({ data: transaction });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));