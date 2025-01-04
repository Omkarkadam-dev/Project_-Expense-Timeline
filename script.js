// Select elements
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseDateInput = document.getElementById('expense-date');
const addExpenseButton = document.getElementById('add-expense');
const timelineContainer = document.getElementById('timeline');

// Add event listener to the Add Expense button
addExpenseButton.addEventListener('click', () => {
    const name = expenseNameInput.value.trim();
    const amount = expenseAmountInput.value.trim();
    const date = expenseDateInput.value.trim();

    if (name && amount && date) {
        // Create timeline entry
        const entry = document.createElement('div');
        entry.classList.add('timeline-entry');

        entry.innerHTML = `
      <div class="details">
        <span>${name}</span>
        <span>${new Date(date).toLocaleDateString()}</span>
      </div>
      <div class="amount">₹${amount}</div>
    `;

        // Append entry to timeline
        timelineContainer.appendChild(entry);

        // Clear input fields
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
        expenseDateInput.value = '';
    } else {
        alert('Please fill out all fields!');
    }
});
