// Function to get the visitor count
function getVisitorCount() {
    fetch('https://nx5xudz957.execute-api.us-east-1.amazonaws.com/prod/visitor', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Check the fetched data
        // Update the UI with the visitor count
        document.getElementById('visitor-count').innerText = data.visitor_count;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('visitor-count').innerText = 'Error loading data';
    });
}

// Function to post a new visitor
function postVisitor(visitorData) {
    fetch('https://nx5xudz957.execute-api.us-east-1.amazonaws.com/prod/visitor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData) // Assuming visitorData is an object
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Visitor added:', data);
        // Optionally update the visitor count after posting
        getVisitorCount();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Fetch visitor count when the page loads
window.onload = getVisitorCount;

// Example usage of postVisitor function
// You can call this function with the relevant visitor data when needed
// postVisitor({ visitorId: 'some_unique_id' });
