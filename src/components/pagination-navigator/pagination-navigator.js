import React from 'react';

import './pagination-navigator.scss';

const PaginationNavigator = ({
  totalEntries, perPage, currentPage, query, location,
}) => {
  if (!location) {
    return (
      <div>Please enter a location</div>
    );
  }

  console.log('DEBUG', totalEntries, perPage, currentPage, query, location);

  return (
    <div id="PaginationNavigator">
      <div id="search-string">
        <span className="accent">
          &quot;
          { query || 'restaurants' }
          &quot;
        </span>
        &nbsp;
        in
        &nbsp;
        { location }
        &nbsp;
        <span>
          &mdash;
          {totalEntries}
          &nbsp;
          Results
        </span>
      </div>
    </div>
  );
};

export default PaginationNavigator;
