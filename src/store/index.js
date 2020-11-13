import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar: {
      namespaced: true,
      state: () => ({
        sidebarStatus: false,
      }),
      getter: {},
      actions: {
        toggleSidebar: ({ commit }) => {
          commit("toggleSidebarStatus");
        },
        sidebarOff: ({ commit }) => {
          commit("sidebarStatusOff");
        },
      },
      mutations: {
        toggleSidebarStatus: (state) => {
          state.sidebarStatus = !state.sidebarStatus;
        },
        sidebarStatusOff: (state) => {
          state.sidebarStatus = false;
        },
      },
    },
    currentData: {
      namespaced: true,
      state: () => ({
        current: "0",
      }),
      getters: {},
      actions: {
        changeCurrentData({ commit }, payload) {
          commit("setCurrentData", payload);
        },
      },
      mutations: {
        setCurrentData(state, data) {
          state.current = data;
        },
      },
    },
  },
});
