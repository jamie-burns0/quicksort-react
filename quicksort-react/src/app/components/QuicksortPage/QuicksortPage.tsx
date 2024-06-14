'use client';

import { useState } from "react";
import QuicksortDataSourceChoice from "../QuicksortDataSourceChoice/QuicksortDataSourceChoice";
import QuicksortHeading from "../QuicksortHeading/QuicksortHeading";
import QuicksortDataInput from "../QuicksortDataInput/QuicksortDataInput";
import QuicksortDataGenerator from "../QuicksortDataGenerator/QuicksortDataGenerator";

const QuicksortPage = () => {

    const [showQuicksortDataGenerator, setShowQuicksortDataGenerator] = useState<boolean>(false);
    const [quicksortDataSourceChoice, setQuicksortDataSourceChoice] = useState<string>('provideNumbers');

    const [generatedData, setGeneratedData] = useState<number[]>([]);

    const handleSelectQuicksortDataSourceChoice = (value: string) => {
        console.log(`QuicksortPage: handleQuicksortDataSourceChoice: ${value}`)

        if( quicksortDataSourceChoice === value ) {
            return;
        }

        setQuicksortDataSourceChoice(value);

        if( 'generateNumbers' === value ) {
            setShowQuicksortDataGenerator(true);
            setGeneratedData([]);
        } else {
            setShowQuicksortDataGenerator(false);
        }
    }

    const handleQuicksortDataGeneration = (generatedData: number[]) => {
        console.log(`QuicksortPage: handleQuicksortDataGeneration: ${generatedData}`);
        setGeneratedData(generatedData);
    }
   
    return (
        <>
            <QuicksortHeading />
            <QuicksortDataSourceChoice onSelectQuicksortDataSourceChoice={ handleSelectQuicksortDataSourceChoice }/>
            {showQuicksortDataGenerator && <QuicksortDataGenerator onQuicksortDataGeneration={ handleQuicksortDataGeneration }/>}
            <QuicksortDataInput generatedData={generatedData} />
        </>
    );
};

export default QuicksortPage;