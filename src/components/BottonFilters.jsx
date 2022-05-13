import React from 'react';
import '../styles/components/Filters.scss';

const BottonFilters = ({ filtersName = [] }) => {
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

export default BottonFilters;
