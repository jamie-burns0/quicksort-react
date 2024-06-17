interface GenerateDataParams {
    numberOfNumbers: number;
    lowerBound: number;
    upperBound: number;
}

const generateData = ( {numberOfNumbers, lowerBound, upperBound}: GenerateDataParams ) => {
    
    let generatedData: number[] = [];
        
    for(let i = 0; i < numberOfNumbers; i++) {
        generatedData.push(Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound));
    }

    return generatedData;
}

export { generateData };