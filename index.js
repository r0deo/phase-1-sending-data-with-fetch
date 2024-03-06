function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        // Access the new id and append it to the DOM
        const newId = data.id;
        document.body.append(newId);
      })
      .catch(error => {
        // Append error message to the DOM
        document.body.append(error.message);
      });
  }
  
  // Test 1 - Send Data
  // To test, call submitData with name and email parameters
  // Example: submitData('John Doe', 'john@example.com');
  
  // Test 2 - Handle the Response
  // The DOM will be updated with the new id on a successful POST request.
  
  // Test 3 - Handle Errors
  // If there's an error, the DOM will be updated with the error message.
  
  // Test 4 - Return the Fetch Chain
  // Ensure you return the fetch chain from the submitData function.
  