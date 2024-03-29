import React from 'react';

import './pagination-navigator.scss';

const PaginationNavigator = ({
  totalEntries, query, location,
}) => {
  if (!location) {
    return (
      <div id="PaginationNavigator">
        <div id="noLocation">Please enter a location</div>
      </div>
    );
  }

  return (
    <div id="PaginationNavigator">
      <div id="search-string" tabIndex="0">
        <span className="accent">
          &quot;
          { query || 'places' }
          &quot;
        </span>
        <span>{` in  ${location} `}</span>
        <span>{`- ${totalEntries || 0} Results`}</span>
      </div>
    </div>
  );
};

export default PaginationNavigator;
