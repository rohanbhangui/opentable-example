import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dataRequested } from '../../redux/actions';

import './top-bar.scss';


export const TopBar = ({ dataRequested }) => {
  const form = {
    city: '',
    refine: '',
  };

  const [state, setState] = useState(form);

  const submitContent = (e) => {
    e.preventDefault();

    dataRequested(state);
  };

  const onChange = (e) => {
    setState({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="header-container">
      <form onSubmit={submitContent} id="search">
        <label htmlFor="refine">
          <div>Refine</div>
          <input id="refine" name="refine" value={state.refine} onChange={onChange} type="text" placeholder="Restaraunts, Breakfast, etc." aria-label="Enter a refine term" />
        </label>
        <span>in</span>
        <label htmlFor="city">
          <div>Location</div>
          <input id="city" name="city" value={state.city} onChange={onChange} required type="text" placeholder="Toronto, Boston, New York, etc." aria-label="Enter a location" />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default connect(null, { dataRequested })(TopBar);
