document.getElementById('battery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const formData = new FormData(this);
    
    // Send form data to the server
    fetch('/submitBatteryInfo', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(`Battery Cell ID: ${data.Cell_ID}\nBarcode: ${data.Barcode}`);
        // You can redirect or perform any other action after successful submission
    })
    .catch(error => console.error('Error submitting battery information:', error));
});
