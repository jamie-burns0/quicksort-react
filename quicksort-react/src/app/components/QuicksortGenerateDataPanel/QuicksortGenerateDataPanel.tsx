'use client';

import { useState } from "react";
import GenerateDataParams from "../GenerateDataParams";

interface QuicksortDataGeneratorProps {
    onGenerateDataButtonClicked: (params: GenerateDataParams) => void;
}

const QuicksortGenerateDataPanel = ({onGenerateDataButtonClicked}: QuicksortDataGeneratorProps) => {

    const [numberOfNumbers, setNumberOfNumbers] = useState<number>(100);
    const [lowerBound, setLowerBound] = useState<number>(1);
    const [upperBound, setUpperBound] = useState<number>(100);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumberOfNumbers(parseInt(e.target.value));

    const handleClick = () => onGenerateDataButtonClicked({numberOfNumbers, lowerBound, upperBound});

    return (
        <>
            <div className='flex flex-row flex-wrap items-center gap-2 pb-6'>
                <span>Generate </span>
                <input
                    className='input outline w-16'
                    name='numberOfNumbers'
                    type='text'
                    inputMode='numeric'
                    value={numberOfNumbers}
                    onChange={handleChange}
                />
                <span> integers between </span>
                <input
                    className='input outline w-16'
                    name='lowerBound'
                    type='text'
                    inputMode='numeric'
                    value={lowerBound}
                    onChange={handleChange}
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
                    onClick={handleClick}>
                    Generate Data
                </button>
            </div>
        </>
    );
}

export default QuicksortGenerateDataPanel;