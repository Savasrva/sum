import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    usersChoices: {},
    currentStepChoice: {},
    currentCategory: {},
    category: {},
  },
  mutations: {
    updateChoices(state, choice) {
      state.usersChoices[choice.itemId] = choice;
    },
    CHANGE_STEP(state, payload) {
      state.step = payload;
    },
    CHANGE_CURRENT_CATEGORY(state, payload) {
      state.currentCategory = payload;
    },
    SAVE_CATEGORY(state, payload) {
      state.category = payload;
    },
  },
  actions: {
    loadCategory({ commit, state }) {
      Promise.resolve(require('../assets/input.json')).then((data) => {
        commit('SAVE_CATEGORY', data);
        commit('CHANGE_CURRENT_CATEGORY', data.items[state.step]);
      });
    },
  },
  modules: {
  },
});
