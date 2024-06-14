import { useState } from 'react';

interface QuicksortDataInputProps {
    generatedData: number[];
}

const QuicksortDataInput = ({generatedData}: QuicksortDataInputProps) => {
    
    const [data, setData] = useState<string>('');

    const handleClick = () => {
        console.log(`handleClick: ${data}`);
        let arr: number[] = [];
        data.split(/[ ,]+/).map((value) => {
            console.log(`value=${value}`);
            arr.push(parseInt(value));
        });
    }
    
    return (
        <>
        {console.log(`QuicksortDataInput: data=${data}, generatedData=${generatedData}`)}
        <div className="flex flex-wrap gap-6 pb-6">
            <textarea
                className='input h-96'
                {...generatedData.length > 0 ? {value: generatedData.join(', ')} : {value: data}}
                placeholder="Enter numbers separated by commas or spaces"
                onChange={(event) => setData(event.target.value)}
            />
            <button 
                className='btn solid success'
                onClick={handleClick}>
                Sort
            </button>
        </div>
        </>
    );
}

export default QuicksortDataInput;