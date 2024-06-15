interface QuicksortGeneratedDataDisplayProps {
    dataToDisplay: string;
}

const QuicksortGeneratedDataDisplay = ({dataToDisplay}: QuicksortGeneratedDataDisplayProps) => {

  return (
    <>
    <div className="flex flex-wrap gap-6 pb-6">
        <textarea
            className='input h-96'
            readOnly={true}
            defaultValue={dataToDisplay}
        />
    </div>
    </>
  );
}

export default QuicksortGeneratedDataDisplay;