import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import MainPage from './MainPage';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />);
})

test('render MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

test('filters robot correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id: 3,
    name: 'john',
    email: 'john@gmail.com'
  }]);
})

test('filters robot correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'a',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const filterRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filteredRobots()).toEqual(filterRobots);
})  