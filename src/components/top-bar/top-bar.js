import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { dataRequested } from '../../redux/actions';

import logo from '../../assets/images/logo.svg';
import './top-bar.scss';


const TopBar = ({ dataRequested }) => {
  const submitContent = loc => (e) => {
    let payload = {};

    if (e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const city = formData.get('location');
      const name = formData.get('refine');


      if (city) {
        payload = { ...payload, city };
      }

      if (name) {
        payload = { ...payload, name };
      }
    }

    if (loc) {
      payload = { ...payload, city: loc };
    }

    dataRequested(payload);
  };

  useEffect(() => {
    submitContent('toronto')();
  }, []);

  return (
    <div className="header-container">
      <form onSubmit={submitContent()}>
        <label htmlFor="venueType">
          <div>Refine</div>
          <input name="refine" type="text" placeholder="Restaraunts, Breakfast, etc." />
        </label>
        <span>in</span>
        <label htmlFor="location">
          <div>Location</div>
          <input name="location" required type="text" placeholder="Toronto, Boston, New York, etc." />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default connect(null, { dataRequested })(TopBar);
