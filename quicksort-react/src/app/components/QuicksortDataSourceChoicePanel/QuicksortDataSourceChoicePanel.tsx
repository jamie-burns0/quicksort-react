'use client';

import { useState } from "react";
import { DataSourceChoice } from "../QuicksortPage/QuicksortPage";

type QuicksortDataSourceChoiceProps = {
    initialDataSourceChoice: DataSourceChoice;
    onSelectQuicksortDataSourceChoice: (value: DataSourceChoice) => void;
};

const QuicksortDataSourceChoicePanel = ({initialDataSourceChoice, onSelectQuicksortDataSourceChoice}: QuicksortDataSourceChoiceProps) => {

    const [selectedQuicksortDataSourceChoiceButton, setSelectedQuicksortDataSourceChoiceButton] = useState<DataSourceChoice>(initialDataSourceChoice);

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.getAttribute('data-content') as DataSourceChoice;
        setSelectedQuicksortDataSourceChoiceButton(choice);
        onSelectQuicksortDataSourceChoice( choice );
    }

    return (
        <>
        <div className='flex flex-wrap gap-6 pb-6'>
            <button 
                className={`btn outline ${'generateNumbers' === selectedQuicksortDataSourceChoiceButton ? 'success' : 'bw'}`}
                data-content={DataSourceChoice.GenerateNumbers}
                name="dataSource" 
                type='button'
                onClick={handleOnClick}>
                Generate the numbers for me
            </button>
            <button 
                className={`btn outline ${'provideNumbers' === selectedQuicksortDataSourceChoiceButton ? 'success' : 'bw'}`} 
                data-content={DataSourceChoice.ProvideNumbers} 
                name="dataSource" 
                type='button' 
                onClick={handleOnClick}>
                I'll provide the numbers to sort
            </button>
        </div>
        </>
    )
}

export default QuicksortDataSourceChoicePanel