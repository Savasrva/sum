import * as types from './mutation-types';

export default {
  async loadCategory({ commit }) {
    await Promise.resolve(require('../assets/input.json')).then((data) => {
      commit(types.SAVE_CATEGORY, data);
    });
  },
  loadUserAnswer({ commit, getters }) {
    let answer = JSON.parse(window.localStorage.getItem('userAnswer'));
    if (!answer) {
      answer = getters.currentCategoryUserAnswer;
    }
    commit(types.SAVE_USER_ANSWER, answer);
  },
  updateUserAnswerState({ commit }, answer) {
    return Promise.resolve(commit(types.UPDATE_USER_ANSWER, answer));
  },
  updateUserAnswer({ dispatch, state }, answer) {
    dispatch('updateUserAnswerState', answer).then(() => {
      window.localStorage.setItem('userAnswer', JSON.stringify(state.userAnswer));
    });
  },
};
