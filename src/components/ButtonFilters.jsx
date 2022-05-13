import React from 'react';

const ButtonFilters = ({ filtersName = [] }) => {
  return (
    <div className="filter">
      {filtersName.map((filter) => (
        <button type="button" key={filter.id}>
          {filter.filterName}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
