import React from 'react';
import { connect } from 'react-redux';
import { dataRequested } from '../../redux/actions';

import logo from '../../assets/images/logo.svg';
import './top-bar.scss';


const TopBar = ({dataRequested}) => {
  const submitContent = () => {
    return (e) => {
      e.preventDefault();

      let formData = new FormData(e.target);

      let payload = {
        city: formData.get('location'),
      };

      dataRequested(payload);
    };
  };

  return (
    <div className="header-container">
      <form onSubmit={submitContent()}>
        <label htmlFor="venueType">
          <div>Venue Type</div>
          <input name="venueType" type="text" placeholder="Restaraunts, Breakfast, etc."/>
        </label>
        <span>in</span>
        <label htmlFor="location">
          <div>Location</div>
          <input name="location" type="text" placeholder="Toronto, Boston, New York, etc."/>
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default connect(null, { dataRequested })(TopBar);
