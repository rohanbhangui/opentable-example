import React from 'react';
import { shallow } from 'enzyme';
import PlaceCard from './place-card';

describe('PlaceCard', () => {
  let obj;
  beforeEach(() => {
    obj = {
      name: undefined,
      address: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      phone: undefined,
      image_url: undefined,
      reserve_url: undefined,
      price: undefined,
    };
  });

  it('should render', () => {
    const component = shallow(<PlaceCard place={obj} />);

    expect(component).toMatchSnapshot();
  });

  it('should render default values', () => {
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
    expect(component.find('#place-name').text()).toContain('');
    expect(component.find('p').at(0).text()).toContain('');
    expect(component.find('p').at(1).text()).toContain(', ,');
    expect(component.find('p').at(2).text()).toContain('');
    expect(component.find('a').prop('href')).toEqual('#');

    // fix this test
    // expect(component.find('#price').find('span.active')).to.have.length(0);
  });

  it('should render the image url provided and use the name as the alt tag', () => {
    obj = { ...obj, image_url: 'xxx', name: 'yyy' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('.img-container').find('img').prop('src')).toEqual('xxx');
    expect(component.find('.img-container').find('img').prop('alt')).toEqual('yyy');
  });

  it('should render the name provided', () => {
    obj = { ...obj, name: 'xxx' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('#place-name').text()).toEqual('xxx');
  });

  it('should render the address provided', () => {
    obj = { ...obj, address: 'xxx' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('p').at(0).text()).toEqual('xxx');
  });

  it('should render the phone provided', () => {
    obj = {
      ...obj, city: 'aaa', state: 'bbb', country: 'cc',
    };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('p').at(1).text()).toEqual('aaa, bbb, cc');
  });

  it('should render the phone provided', () => {
    obj = { ...obj, phone: '000-000-0000' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('p').at(2).text()).toEqual('000-000-0000');
  });

  // test.todo('should render 3 green dollar signs and 1 grey dollar sign');

  it('should render the url provided', () => {
    obj = { ...obj, reserve_url: 'http://abc.xyz' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('a').prop('href')).toEqual('http://abc.xyz');
  });
});
