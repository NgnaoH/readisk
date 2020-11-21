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
        setActiveButton({ commit }, payload) {
          commit("setActiveButton", payload);
        },
      },
      mutations: {
        setCurrentData(state, data) {
          state.current = data;
        },
        setActiveButton(state, data) {
          state.current = data;
        },
      },
    },
    // diskSelector: {
    //   namespaced: true,
    //   state: () => ({
    //     buttonStatus: false,
    //   }),
    //   getter: {},
    //   actions: {
        
    //   },
    //   mutations: {

    //   }
    // }
  },
});
