import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export const mutations = {
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

export default new Vuex.Store({
  state: {
    step: 0,
    userAnswer: {},
    category: {},
  },
  getters: {
    currentCategory: ({ step, category }) => category.items[step],
    currentCategoryUserAnswer: ({ userAnswer }, { currentCategory }) => (
      userAnswer[currentCategory.itemId]
    ),
    isFirst: ({ step }) => step === 0,
    isLast: ({ step, category }) => (step + 1) === category.items.length,
    hasAnswer: ({ userAnswer }, { currentCategory }) => {
      const { answer } = userAnswer[currentCategory.itemId];
      const flag = Array.isArray(answer);
      return flag ? !!answer.length : !!answer;
    },
    answerData: ({ category, userAnswer }) => ({
      id: category.formId,
      items: Object.keys(userAnswer).map((key) => {
        const item = userAnswer[key];
        return {
          id: item.itemId,
          answer: Array.isArray(item.answer) ? item.answer.join(',') : item.answer,
        };
      }),
    }),
  },
  mutations,
  actions: {
    loadCategory({ commit }) {
      Promise.resolve(require('../assets/input.json')).then((data) => {
        commit(types.SAVE_CATEGORY, data);
      });
    },
    loadUserAnswer({ commit }) {
      const answer = JSON.parse(localStorage.getItem('userAnswer'));
      if (Object.keys(answer).length) {
        commit(types.SAVE_USER_ANSWER, answer);
      }
    },
    updateUserAnswerState({ commit }, answer) {
      return Promise.resolve(commit(types.UPDATE_USER_ANSWER, answer));
    },
    updateUserAnswer({ dispatch, state }, answer) {
      dispatch('updateUserAnswerState', answer).then(() => {
        localStorage.setItem('userAnswer', state.userAnswer);
      });
    },
  },
  modules: {
  },
});
