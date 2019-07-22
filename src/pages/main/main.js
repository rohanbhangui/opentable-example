import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { PROJECT_NAME } from '../../utility/variables';

import ProductCard from '../../components/product-search-card';
import PaginationNavigator from '../../components/pagination-navigator';
import './main.scss';

const Main = ({places}) => {
  return (
    <div id="Main">
      <PaginationNavigator />

      { console.log("DEBUG", places)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  places: state.json,
});

export default connect(mapStateToProps, null)(Main);
