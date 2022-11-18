import './Pagination.css'

import React from 'react'

const Pagination = (props) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil((props.countries + 1 ) / props.countriesPerPage); i++) {
    pageNumbers.push(i);
    // debugger
  }
  console.log(props)
  return (
    <nav className='pagination'>
      
      <ul >
        {
          pageNumbers?.map((number) => (
            <button className={number === props.page ? 'buttonAct' : 'buttonDes' } key={number} onClick={() => props.paginate(number)} >
              {number}
            </button>
          ))
        }
      </ul>
    </nav>
  );
}

export default Pagination