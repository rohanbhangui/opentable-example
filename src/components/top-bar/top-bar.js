import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/';

import logo from '../../assets/images/logo.svg';
import './top-bar.scss';


export default TopBar = () => {
  const submitContent = () => ({
    return (e) => {
      e.preventDefault();

      let formData = new FormData(e.target);


    };
  });

  return (
    <div className="header-container">
      <form onSubmit={ submitContent() }>
        <label>
          <div>Venue Type</div>
          <input name="venueType" type="text" placeholder="Restaraunts, Breakfast, etc."/>
        </label>
        <span>in</span>
        <label>
          <div>Location</div>
          <input name="location" type="text" placeholder="Toronto, Boston, New York, etc."/>
        </label>
        <label>
          <input type="submit" value="Search"/>
        </label>
      </form>
    </div>
  )
};
