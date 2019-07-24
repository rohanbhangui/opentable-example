import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from './top-bar';

describe('TopBar', () => {
  let component;
  const mockDataRequestedFn = jest.fn();

  beforeEach(() => {
    component = shallow(<TopBar dataRequested={mockDataRequestedFn} />);
  });

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the mock submission function', () => {
    component.find('#search').simulate(
      'submit',
      { preventDefault() {} },
    );
    expect(mockDataRequestedFn.mock.calls.length).toBe(1);
  });

  it('should be called with a name value and city value', () => {
    component.find('#city').simulate(
      'change',
      { target: { name: 'city', value: 'yyy' } },
    );

    component.find('#search').simulate(
      'submit',
      { preventDefault() {} },
    );

    expect(mockDataRequestedFn.mock.calls[1][0]).toEqual(
      { city: 'yyy', refine: '' },
    );

    component.find('#refine').simulate(
      'change',
      { target: { name: 'refine', value: 'xxx' } },
    );

    component.find('#search').simulate(
      'submit',
      { preventDefault() {} },
    );

    expect(mockDataRequestedFn.mock.calls[2][0]).toEqual(
      { refine: 'xxx', city: '' },
    );
  });
});
