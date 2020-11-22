import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const root = document.documentElement
const themes = {
  light: {
    "--background-color": "#e4ebec",
    "--text-normal-color": "#000000",
    "--text-active-color": "#12d1e2",
  },
  dark: {
    "--background-color": "#black",
    "--text-normal-color": "#ffffff",
    "--text-active-color": "#12d1e2",
  }
}

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
        }
      },
      mutations: {
        toggleSidebarStatus: (state) => {
          state.sidebarStatus = !state.sidebarStatus;
        },
      }
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
        }
      },
      mutations: {
        setCurrentData(state, data) {
          state.current = data;
        }
      }
    },
    toggleTheme: {
      namespaced: true,
      state: {
        theme: themes.light
      },
      getters:{},
      actions: {
        toggleTheme({commit}){
          commit("toogleTheme")
        }
      },
      mutations: {
        toggleTheme(state) {
          state.theme = theme.dark
        }
      }
    }
  },
});
