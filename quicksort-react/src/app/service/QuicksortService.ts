const quicksort = (dataToSort: number[]): Promise<number[]> => {

    // Make a POST request to the RESTful API
    return fetch('http://localhost:8080/quicksort', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSort)
    })
    .then(response => response.json())
    .catch(error => {
        // Handle the error
        console.error(`Error: ${error}`);
    });
}

export { quicksort };