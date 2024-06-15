import { useState } from 'react';

interface QuicksortProvideDataPanelProps {
    onQuicksortDataProvided: (value: number[]) => void;
}

const QuicksortProvideDataPanel = ({onQuicksortDataProvided}: QuicksortProvideDataPanelProps) => {
    
    const [data, setData] = useState<string>('');
    
    const handleChange = (value: string) => {
        setData(value);
        const numbers = value.split(/[\s,]+/).map(Number);
        onQuicksortDataProvided(numbers);
    }

    return (
        <>
        <div className="flex flex-wrap gap-6 pb-6">
            <textarea
                className='input h-96'
                placeholder="Enter numbers separated by commas or spaces"
                value={data}
                onChange={e => handleChange(e.target.value)}
            />
        </div>
        </>
    );
}

export default QuicksortProvideDataPanel;