document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('room-form');
    const tableBody = document.getElementById('room-table').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const period = document.getElementById('period').value;
        const roomType = document.getElementById('roomtype').value;
        
        // Generate a random room number
        const roomNumber = Math.floor(Math.random() * (310 - 101 + 1)) + 101;

        // Add new row to table
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = address;
        row.insertCell(2).textContent = period;
        row.insertCell(3).textContent = roomNumber;
        row.insertCell(4).textContent = roomType;

        // Create and append delete button
        const deleteCell = row.insertCell(5);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            row.remove();
        });
        deleteCell.appendChild(deleteButton);

        // Clear form
        form.reset();
    });
});
