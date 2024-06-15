'use client';

import { useState } from "react";
import QuicksortDataSourceChoicePanel from "../QuicksortDataSourceChoicePanel/QuicksortDataSourceChoicePanel";
import QuicksortHeading from "../QuicksortHeading/QuicksortHeading";
import QuicksortProvideDataPanel from "../QuicksortProvideDataPanel/QuicksortProvideDataPanel";
import QuicksortGenerateDataPanel from "../QuicksortGenerateDataPanel/QuicksortGenerateDataPanel";
import QuicksortGeneratedDataDisplay from "../QuicksortGeneratedDataDisplay/QuicksortGeneratedDataDisplay";
import QuicksortSortButtonPanel from "../QuicksortSortButtonPanel/QuicksortSortButtonPanel";

enum DataSourceChoice {
    GenerateNumbers = 'generateNumbers',
    ProvideNumbers = 'provideNumbers'
}

const QuicksortPage = () => {

    const initialDataSourceChoice = DataSourceChoice.GenerateNumbers;

    const [quicksortDataSourceChoice, setQuicksortDataSourceChoice] = useState<DataSourceChoice>(initialDataSourceChoice);

    const [generatedData, setGeneratedData] = useState<number[]>([]);
    const [providedData, setProvidedData] = useState<number[]>([]);

    const showQuicksortDataGeneratorPanel = () => {
        return DataSourceChoice.GenerateNumbers === quicksortDataSourceChoice;
    }

    const showQuicksortInputPanel = () => {
        return DataSourceChoice.ProvideNumbers === quicksortDataSourceChoice;
    }

    const haveGeneratedData = () => {
        return generatedData.length > 0;
    }

    const haveProvidedData = () => {
        return providedData.length > 0;
    }

    const isSortButtonEnabled = () => {
        return  ( DataSourceChoice.GenerateNumbers === quicksortDataSourceChoice && haveGeneratedData() ) ||
                ( DataSourceChoice.ProvideNumbers === quicksortDataSourceChoice && haveProvidedData() );
    }

    const generatedDataAsCommanSeparatedString = () => {
        return generatedData.join(', ');
    }

    const handleSelectQuicksortDataSourceChoice = (choice: DataSourceChoice) => {
        console.log(`QuicksortPage: handleQuicksortDataSourceChoice: ${choice}`)

        if( quicksortDataSourceChoice === choice ) {
            return;
        }

        setQuicksortDataSourceChoice(choice);

        if( DataSourceChoice.GenerateNumbers === choice ) {
            setGeneratedData([]);
        } else {
            setProvidedData([]);
        }
    }

    const handleQuicksortDataGeneration = (generatedData: number[]) => {
        console.log(`QuicksortPage: handleQuicksortDataGeneration: ${generatedData}`);
        setGeneratedData(generatedData);
    }

    const handleQuicksortDataProvided = (providedData: number[]) => {
        console.log(`QuicksortPage: handleQuicksortDataProvided: ${providedData}`);
        setProvidedData(providedData);
    }
   
    return (
        <>
            <QuicksortHeading />
            <QuicksortDataSourceChoicePanel initialDataSourceChoice={quicksortDataSourceChoice} onSelectQuicksortDataSourceChoice={ handleSelectQuicksortDataSourceChoice }/>
            {showQuicksortDataGeneratorPanel() && <QuicksortGenerateDataPanel onQuicksortDataGeneration={ handleQuicksortDataGeneration }/>}
            {showQuicksortDataGeneratorPanel() && haveGeneratedData() && <QuicksortGeneratedDataDisplay dataToDisplay={generatedDataAsCommanSeparatedString()} />}
            {showQuicksortInputPanel() && <QuicksortProvideDataPanel onQuicksortDataProvided={ handleQuicksortDataProvided }/>}
            <QuicksortSortButtonPanel isEnabled={isSortButtonEnabled()}/>
        </>
    );
};

export default QuicksortPage;
export { DataSourceChoice };