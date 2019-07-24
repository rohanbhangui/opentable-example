import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { PROJECT_NAME } from '../../utility/variables';

import PlaceCard from '../../components/place-card';
import PaginationNavigator from '../../components/pagination-navigator';
import './main.scss';

const Main = ({ pages }) => (
  <div id="Main">
    <PaginationNavigator location={pages ? pages.location : ''} totalEntries={pages && pages.total_entries} query={pages && pages.query} />
    <div className="places-container">
      { pages && pages.location && pages.restaurants && pages.restaurants.map((item, index) => (
        <div className="places-item" key={index}>
          <PlaceCard place={item} />
        </div>
      ))}
    </div>

  </div>
);

const mapStateToProps = (state) => {
  const { pages } = state;
  return { pages };
};

export default connect(mapStateToProps, null)(Main);
