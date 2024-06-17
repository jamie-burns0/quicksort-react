interface QuicksortSortedDataPanelProps {
    sortedData: number[];
}

const QuicksortSortedDataPanel = ({ sortedData }: QuicksortSortedDataPanelProps) => {

  const sortedDataAsString = sortedData.join(", ");

  return (
    <>
    <div className="flex flex-wrap gap-6 pb-6">
      <textarea
        className='input h-96'
        value={sortedDataAsString}
        readOnly={true}
      />
    </div>
    </>
  );
}

export default QuicksortSortedDataPanel;