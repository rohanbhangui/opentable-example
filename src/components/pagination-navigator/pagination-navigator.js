import React from 'react';

import './pagination-navigator.scss';

const PaginationNavigator = (totalEntries, perPage, currentPage, query, location) => {

  if (!location) {
    return (
      <div>Please enter a location</div>
    );
  }

  return (
    <div className="PaginationNavigator">
      <div id="search-string">
        &quot;
        { query || 'restaraunts' }
        &quot;
        in
        { location }
      </div>
    </div>
  );
};

export default PaginationNavigator;
