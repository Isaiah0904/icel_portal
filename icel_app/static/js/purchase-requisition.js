function calculateSubtotal(input) {
  let row = input.parentElement.parentElement; // Get the row where the input is located
  let price = parseFloat(row.querySelector('.price').value) || 0; // Get price
  let quantity = parseFloat(row.querySelector('.quantity').value) || 0; // Get quantity
  let subtotalCell = row.querySelector('.subtotal'); // Get the subtotal cell

  // Calculate and update subtotal
  subtotalCell.textContent = (price * quantity).toFixed(2);

  // Recalculate total after subtotal is updated
  calculateTotal();
}

function calculateTotal() {
  let total = 0;
  let subtotals = document.querySelectorAll('.subtotal'); // Get all subtotals

  subtotals.forEach(function(subtotal) {
    total += parseFloat(subtotal.textContent) || 0; // Add each subtotal to the total
  });

  document.getElementById('total').textContent = total.toFixed(2); // Update total display
}


function addRow() {
  let table = document.getElementById('table');
  let newRow = table.insertRow(table.rows.length - 1); // insert before the total row

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  

  cell1.textContent = 'Item ' + (table.rows.length - 2);
  cell2.innerHTML = '<input type="number" value="0" class="price" oninput="calculateSubtotal(this)">';
  cell3.innerHTML = '<input type="number" value="0" class="quantity" oninput="calculateSubtotal(this)">';
  cell5.innerHTML = '0';
  cell5.className = 'subtotal';
  cell4.innerHTML = '<input type="text" class="Description Of Goods/Services" output="text">';
}

function deleteRow() {
  let table = document.getElementById('table');

  // Ensure the table has more than three rows (header + first data row + at least one more data row)
  if (table.rows.length > 3) {
    // Identify the second-to-last row (the row to be deleted, excluding the total row)
    let rowToDelete = table.rows[table.rows.length - 2];

    // Get the subtotal cell of the row to delete
    let subtotalCell = rowToDelete.querySelector('.subtotal');
    let subtotalValue = parseFloat(subtotalCell.textContent) || 0;

    // Subtract the row's subtotal from the total
    let currentTotal = parseFloat(document.getElementById('total').textContent) || 0;
    let newTotal = currentTotal - subtotalValue;

    // Update the total in the table
    document.getElementById('total').textContent = newTotal.toFixed(2);

    // Delete the row from the table
    table.deleteRow(table.rows.length - 2); // Deletes the second-to-last row (excluding the total row)
  } else {
    console.error("Cannot delete the table header or the first data row.");
  }
}