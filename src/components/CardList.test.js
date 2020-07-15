import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import CardList from './CardList';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

test('expect to render Card component', () => {
  const mockRobots = [
    {
      id : 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
