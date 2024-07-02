const QuicksortFooter = () => {
  return (
    <>
      <div className='pb-6'>
        <span className='text-sm font-normal'>
          For more information, see 
          <a href="https://github.com/jamie-burns0/quicksort-react" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1">
            <span>Quicksort React App</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </a>
        </span>
      </div>
    </>
  );
}

export default QuicksortFooter;