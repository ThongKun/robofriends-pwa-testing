import * as actions from './actions';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])

test('should create an action to Search Robots', () => {
  const text = 'wooo'
  const exectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(exectedAction)
})

test('handle requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  const exectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }
  const action = store.getActions();
  expect(action[0]).toEqual(exectedAction)
})