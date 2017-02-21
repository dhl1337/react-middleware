import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  "use strict";
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' },
    ]
  }
}