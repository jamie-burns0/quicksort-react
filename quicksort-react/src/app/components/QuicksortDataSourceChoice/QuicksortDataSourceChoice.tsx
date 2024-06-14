'use client';

import { useState } from "react";

type QuicksortDataSourceChoiceProps = {
    onSelectQuicksortDataSourceChoice: (value: string) => void;
};

const QuicksortDataSourceChoice = ({onSelectQuicksortDataSourceChoice}: QuicksortDataSourceChoiceProps) => {

    const [selectedQuicksortDataSourceChoiceButton, setSelectedQuicksortDataSourceChoiceButton] = useState<string>('provideNumbers');

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.getAttribute('data-content') ?? '';
        setSelectedQuicksortDataSourceChoiceButton(value);
        onSelectQuicksortDataSourceChoice( value ?? '' );
    }

    return (
        <>
        <div className='flex flex-wrap gap-6 pb-6'>
            <button 
                className={`btn outline ${'provideNumbers' === selectedQuicksortDataSourceChoiceButton ? 'success' : 'bw'}`} 
                data-content='provideNumbers' 
                name="dataSource" 
                type='button' 
                onClick={handleOnClick}>
                I'll provide the numbers to sort
            </button>
            <button 
                className={`btn outline ${'generateNumbers' === selectedQuicksortDataSourceChoiceButton ? 'success' : 'bw'}`}
                data-content='generateNumbers'
                name="dataSource" 
                type='button'
                onClick={handleOnClick}>
                Generate the numbers for me
            </button>
        </div>
        </>
    )
}

export default QuicksortDataSourceChoice