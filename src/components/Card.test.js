import React from 'react';
import { shallow} from 'enzyme';
import {createSerializer} from 'enzyme-to-json';

import Card from './Card';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

test('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})
