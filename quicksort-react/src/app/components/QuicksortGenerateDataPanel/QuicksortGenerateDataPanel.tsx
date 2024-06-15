'use client';

import { useState } from "react";

interface QuicksortDataGeneratorProps {
    onQuicksortDataGeneration: (value: number[]) => void;
}

const QuicksortGenerateDataPanel = ({onQuicksortDataGeneration}: QuicksortDataGeneratorProps) => {

    const [numberOfNumbers, setNumberOfNumbers] = useState<number>(100);
    const [lowerBound, setLowerBound] = useState<number>(1);
    const [upperBound, setUpperBound] = useState<number>(100);
    
    const handleOnClick = () => {
        
        const n = numberOfNumbers;
        const lb = lowerBound;
        const up = upperBound;

        let arr: number[] = [];
        
        for(let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * (up - lb + 1) + lb));
        }

        onQuicksortDataGeneration(arr);
    }

    return (
        <>
            <div className='flex flex-row flex-wrap gap-6 pb-6'>
                <p className="align-middle">
                <span>Generate </span>
                <input
                    className='input outline w-16'
                    name='numberOfNumbers'
                    type='text'
                    inputMode='numeric'
                    value={numberOfNumbers}
                    onChange={(e) => setNumberOfNumbers(parseInt(e.target.value))}
                />
                <span> integers between </span>
                <input
                    className='input outline w-16'
                    name='lowerBound'
                    type='text'
                    inputMode='numeric'
                    value={lowerBound}
                    onChange={(e) => setLowerBound(parseInt(e.target.value))}
                />
                <span> and </span>
                <input
                    className='input outline w-16'
                    name='upperBound'
                    type='text'
                    inputMode='numeric'
                    value={upperBound}
                    onChange={(e) => setUpperBound(parseInt(e.target.value))}
                />
                <button
                    className="btn solid success ml-6"
                    onClick={handleOnClick}>
                    Generate Data
                </button>
                </p>
            </div>
        </>
    );
}

export default QuicksortGenerateDataPanel;