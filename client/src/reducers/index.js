import { combineReducers } from 'redux';

import posts from './posts.js';
import message from './message.js';

export default combineReducers({ posts:posts, message:message});