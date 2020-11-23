import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const root = document.documentElement;
const themes = {
  light: {
    "--background-color": "#e4ebec",
    "--text-normal-color": "#000000",
    "--text-active-color": "#80ebf5",
    "--boxshadow-light": "#ffffff",
    "--boxshadow-dark": "#c6c4c4",
    "--text-design-color":
      "linear-gradient( var(--text-active-color) 30%, #bef4fa 50%, var(--text-active-color) 70% )",
  },
  dark: {
    "--background-color": "#444444",
    "--text-normal-color": "#eeecec",
    "--text-active-color": "#fc7a7a",
    "--boxshadow-light": "#4e4e4e",
    "--boxshadow-dark": "#3a3a3a",
    "--text-design-color":
      "linear-gradient( var(--text-active-color) 30%, #ffcec8  50%, var(--text-active-color) 70% )",
  },
};

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
          commit("sidebarOff");
        },
      },
      mutations: {
        toggleSidebarStatus: (state) => {
          state.sidebarStatus = !state.sidebarStatus;
        },
        sidebarOff: (state) => {
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
    changeTheme: {
      namespaced: true,
      state: () => ({
        theme: "dark",
        icon: "sun"
      }),
      getters: {},
      actions: {
        toggleTheme({ commit }, payload) {
          commit("toggleTheme", payload);
          let themeColors = themes[payload];
          for (let themeColor in themeColors) {
            let color = themeColors[themeColor];
            root.style.setProperty(themeColor, color);
          }
        },
      },
      mutations: {
        toggleTheme(state) {
          state.theme === "light" ? (state.theme = "dark") : (state.theme = "light");
          state.icon === "sun" ? state.icon = "star" : state.icon = "sun"
        },
      },
    },
  },
});
