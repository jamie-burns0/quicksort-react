interface QuicksortSortButtonPanelProps {
    isEnabled: boolean;
    onSortButtonClicked: () => void;
}

const QuicksortSortButtonPanel = ({ isEnabled, onSortButtonClicked }: QuicksortSortButtonPanelProps) => {

const handleClick = () => {
    onSortButtonClicked();
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