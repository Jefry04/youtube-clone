import React from 'react';

const ButtonFilters = ({ filtersName = [] }) => {
  return (
    <div className="filter">
      <div className="filter__container">
        {filtersName.map((filter) => (
          <button type="button" key={filter.id} className="filter__button">
            {filter.filterName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonFilters;
