const quicksort = (dataToSort: number[]): Promise<number[]> => {

    const url: string = process.env.NEXT_PUBLIC_QUICKSORT_API_URL || '';

    // Make a POST request to the RESTful API
    return fetch( url, {
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