import React from 'react'

const Pagination = (props) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil((props.countries + 1 ) / props.countriesPerPage); i++) {
    pageNumbers.push(i);
    // debugger
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers?.map((number) => (
            <button key={number} onClick={() => props.paginate(number)} >
              {number}
            </button>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination