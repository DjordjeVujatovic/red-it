import { combineReducers } from 'redux';
import postListPageReducer from '../containers/PostList/actions';
import categoriesReducer from '../containers/Categories/actions';
import mockData from '../mock-data';

export const appInitialState = mockData;
// const appInitialState = mockData.posts;

const appData = (state = appInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  appData,
  posts: postListPageReducer,
  categories: categoriesReducer,
});