'use client';

import { useState } from "react";
import QuicksortDataSourceChoicePanel from "../QuicksortDataSourceChoicePanel/QuicksortDataSourceChoicePanel";
import QuicksortHeading from "../QuicksortHeading/QuicksortHeading";
import QuicksortProvideDataPanel from "../QuicksortProvideDataPanel/QuicksortProvideDataPanel";
import QuicksortGenerateDataPanel from "../QuicksortGenerateDataPanel/QuicksortGenerateDataPanel";
import QuicksortGeneratedDataDisplay from "../QuicksortGeneratedDataDisplay/QuicksortGeneratedDataDisplay";
import QuicksortSortButtonPanel from "../QuicksortSortButtonPanel/QuicksortSortButtonPanel";
import QuicksortSortedDataPanel from "../QuicksortSortedDataPanel/QuicksortSortedDataPanel";
import DataSourceChoice from "../DataSourceChoice";
import GenerateDataParams from "../GenerateDataParams";
import { quicksort } from "@/app/service/QuicksortService";
import { generateData } from "@/app/service/GenerateDataService";

const QuicksortPage = () => {

    const initialDataSourceChoice = DataSourceChoice.GenerateNumbers;

    const [quicksortDataSourceChoice, setQuicksortDataSourceChoice] = useState<DataSourceChoice>(initialDataSourceChoice);

    const [generatedData, setGeneratedData] = useState<number[]>([]);
    const [providedData, setProvidedData] = useState<number[]>([]);
    const [sortedData, setSortedData] = useState<number[]>([]);

    const showQuicksortDataGeneratorPanel = () => {
        return DataSourceChoice.GenerateNumbers === quicksortDataSourceChoice;
    }

    const showQuicksortInputPanel = () => {
        return DataSourceChoice.ProvideNumbers === quicksortDataSourceChoice;
    }

    const showQuicksortSortedDataPanel = () => {
        return isSortButtonEnabled() && sortedData.length > 0;
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

    const dataToSort = (): number[] => {

        switch( quicksortDataSourceChoice ) {
            case DataSourceChoice.GenerateNumbers:
                return generatedData;
            case DataSourceChoice.ProvideNumbers:
                return providedData;
            default:
                return [];
        }
    }

    const generatedDataAsCommanSeparatedString = () => {
        return generatedData.join(', ');
    }

    const handleSelectQuicksortDataSourceChoice = (choice: DataSourceChoice) => {

        if( quicksortDataSourceChoice === choice ) {
            return;
        }

        setQuicksortDataSourceChoice(choice);
        setGeneratedData([]);
        setProvidedData([]);
        setSortedData([]);
    }

    const handleGenerateDataButtonClicked = ( {numberOfNumbers, lowerBound, upperBound}: GenerateDataParams ) => {
        setGeneratedData(generateData( {numberOfNumbers, lowerBound, upperBound}));
    }

    const handleQuicksortDataProvided = (providedData: number[]) => setProvidedData(providedData);

    const handleSortButtonClicked = () => quicksort(dataToSort()).then(sd => setSortedData(sd));
   
    return (
        <>
            <QuicksortHeading />
            <QuicksortDataSourceChoicePanel initialDataSourceChoice={quicksortDataSourceChoice} onSelectQuicksortDataSourceChoice={ handleSelectQuicksortDataSourceChoice }/>
            {showQuicksortDataGeneratorPanel() && <QuicksortGenerateDataPanel onGenerateDataButtonClicked={handleGenerateDataButtonClicked}/>}
            {showQuicksortDataGeneratorPanel() && haveGeneratedData() && <QuicksortGeneratedDataDisplay dataToDisplay={generatedDataAsCommanSeparatedString()} />}
            {showQuicksortInputPanel() && <QuicksortProvideDataPanel onQuicksortDataProvided={ handleQuicksortDataProvided }/>}
            <QuicksortSortButtonPanel isEnabled={isSortButtonEnabled()} onSortButtonClicked={ handleSortButtonClicked }/>
            {showQuicksortSortedDataPanel() && <QuicksortSortedDataPanel sortedData={sortedData} />}
        </>
    );
};

export default QuicksortPage;