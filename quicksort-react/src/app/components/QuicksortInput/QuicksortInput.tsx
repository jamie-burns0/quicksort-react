import React from "react";

const QuicksortInput = () => {
    return (
        <>
            <h1>Quicksort - Hoare's midpoint</h1>
            <div>
                <label>Enter a list of numbers separated by commas:</label>
                <textarea className='bg-sky-400 hover:bg-sky-600' rows={10} cols={100} />
            </div>
            <button>Sorts</button>
        </>
    );
}

export default QuicksortInput;