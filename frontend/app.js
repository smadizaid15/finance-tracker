const form = document.getElementById('form');
const list = document.getElementById('list');
const balance = document.getElementById('balance');


const API_URL = 'http://localhost:5000/api/transactions'; 

async function getTransactions() {
    const res = await fetch(API_URL);
    const data = await res.json();
   
    list.innerHTML = '';
    let total = 0;

    data.data.forEach(transaction => {
        total += transaction.amount;
        const li = document.createElement('li');
        li.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        li.innerText = `${transaction.text} <span>${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount)}</span>`;
        list.appendChild(li);
    });

    balance.innerText = total.toFixed(2);
}

async function addTransaction(e) {
    e.preventDefault();
    const text = document.getElementById('text').value;
    const amount = +document.getElementById('amount').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, amount })
    });

    document.getElementById('text').value = '';
    document.getElementById('amount').value = '';
    getTransactions();
}

form.addEventListener('submit', addTransaction);
getTransactions();
const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', async () => {
    if (confirm('Are you sure you want to delete all records?')) {
        await fetch(API_URL, {
            method: 'DELETE'
        });
        getTransactions();
    }
});