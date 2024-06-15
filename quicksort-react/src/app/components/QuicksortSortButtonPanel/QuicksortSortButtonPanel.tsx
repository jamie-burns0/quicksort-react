interface QuicksortSortButtonPanelProps {
    isEnabled: boolean;
}

const QuicksortSortButtonPanel = ({isEnabled}: QuicksortSortButtonPanelProps) => {

const handleClick = () => {
    console.log(`handleClick`);
}

  return (
    <>
    <div className="flex flex-wrap gap-6 pb-6">
        <button 
            className='btn solid success'
            disabled={!isEnabled}
            onClick={handleClick}>
            Sort
        </button>
    </div>
    </>
  );
}

export default QuicksortSortButtonPanel;