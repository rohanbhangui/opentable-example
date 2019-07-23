import React from 'react';
import { shallow } from 'enzyme';
import PaginationNavigator from './pagination-navigator';

describe('PaginationNavigator', () => {
  it('should render', () => {
    const component = shallow(<PaginationNavigator />);

    expect(component).toMatchSnapshot();
  });

  it('should render default string if no location provided', () => {
    const component = shallow(<PaginationNavigator />);

    expect(component.find('div').html()).toContain('Please enter a location');
  });

  it('should use custom string when location is provided', () => {
    const component = shallow(<PaginationNavigator location="toronto" />);

    expect(component.find('#search-string').html()).toContain('toronto');
  });

  it('should default to default query string if none is provided', () => {
    const component = shallow(<PaginationNavigator location="toronto" />);

    expect(component.find('.accent').html()).toContain('&quot;places&quot;');
  });

  it('should use the provided query string', () => {
    const component = shallow(<PaginationNavigator query="dinner" location="toronto" />);

    expect(component.find('.accent').html()).toContain('&quot;dinner&quot;');
  });

  it('should render "- 0 results"', () => {
    const component = shallow(<PaginationNavigator location="toronto" />);

    expect(component.find('span').at(2).html()).toContain('- 0 Results');
  });

  it('should render "- 25 results"', () => {
    const component = shallow(<PaginationNavigator totalEntries="25" location="toronto" />);

    expect(component.find('span').at(2).html()).toContain('- 25 Results');
  });
});
