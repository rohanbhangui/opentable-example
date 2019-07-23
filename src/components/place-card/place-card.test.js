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

  it('should render a default values', () => {
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
    expect(component.find('#place-name').text()).toContain('');
    expect(component.find('p').at(0).text()).toContain('');
    expect(component.find('p').at(1).text()).toContain(', ,');
    expect(component.find('p').at(2).text()).toContain('');
    expect(component.find('p').at(3).find('.accented')).to.have.lengthOf(0);
  });

  it('should render the name provided', () => {
    obj = { ...obj, name: 'xxx' };
    const component = shallow(<PlaceCard place={obj} />);

    expect(component.find('#place-name').html()).toContain('xxx');
  });

//   it('should render the address provided', () => {
//     obj = { ...obj, name: 'xxx' };
//     const component = shallow(<PlaceCard place={obj} />);
//
//     expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
//   });
//
//   it('should render the city-state-country string correctly', () => {
//     const component = shallow(<PlaceCard place={obj} />);
//
//     expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
//   });
//
//   it('should show no green price signs', () => {
//     const component = shallow(<PlaceCard place={obj} />);
//
//     expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
//   });
//
//   it('should show 3 green price signs and 1 grey price sign', () => {
//     const component = shallow(<PlaceCard place={obj} />);
//
//     expect(component.find('.img-container').find('img').prop('src')).toEqual('https://placehold.it/200x200');
//   });
});
