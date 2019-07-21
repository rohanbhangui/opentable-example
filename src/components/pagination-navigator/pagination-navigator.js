import React from 'react';

import './pagination-navigator.scss';

export default PaginationNavigator = (total_entries, per_page, current_page, query, location) => {
  return (
    <div className="PaginationNavigator">
      <div id="search-string">
        &quot;
        { query || 'restaraunts' }
        in
        { location }
        &quot;
      </div>
    </div>
  );
};
