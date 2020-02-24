import * as types from './mutation-types';

export default {
  [types.SAVE_USER_ANSWER](state, answer) {
    state.userAnswer = answer;
  },
  [types.UPDATE_USER_ANSWER](state, answer) {
    state.userAnswer[answer.itemId] = answer;
  },
  [types.UPDATE_STEP](state, payload) {
    state.step = payload;
  },
  [types.SAVE_CATEGORY](state, payload) {
    state.category = payload;
  },
};
