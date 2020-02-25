import * as types from './mutation-types';

export default {
  loadCategory({ commit }) {
    Promise.resolve(require('../assets/input.json')).then((data) => {
      commit(types.SAVE_CATEGORY, data);
    });
  },
  loadUserAnswer({ commit, state, getters }) {
    let answer = JSON.parse(window.localStorage.getItem('userAnswer'));
    let step = Number(window.localStorage.getItem('step'));
    if (!answer) {
      answer = { [getters.currentUserAnswer.itemId]: getters.currentUserAnswer };
      step = state.step;
    }
    commit(types.SAVE_USER_ANSWER, answer);
    commit(types.UPDATE_STEP, step);
  },
  updateUserAnswerState({ commit, state }, answer) {
    state.userAnswer[answer.itemId] = answer;
    return Promise.resolve(commit(types.SAVE_USER_ANSWER, state.userAnswer));
  },
  updateUserAnswer({ dispatch, state }, answer) {
    dispatch('updateUserAnswerState', answer).then(() => {
      window.localStorage.setItem('userAnswer', JSON.stringify(state.userAnswer));
    });
  },
  updateStepState({ commit }, payload) {
    return Promise.resolve(commit(types.UPDATE_STEP, payload));
  },
  updateStep({ dispatch, state }, payload) {
    dispatch('updateStepState', payload).then(() => {
      window.localStorage.setItem('step', state.step);
    });
  },
  submit({ getters }) {
    console.log(getters.answerData);
  },
};
