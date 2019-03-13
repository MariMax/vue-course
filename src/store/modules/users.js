export default {
  namespaced: true,

  state: {
    users: []
  },

  getters: {
    userCount(state) {
      return state.users.length;
    }
  },

  mutations: {
    ADD_USER(state, name) {
      const id = Math.floor(Math.random() * new Date().getTime()).toString(16);
      state.users = [{ id, name }, ...state.users];
    },

    POPULATE_USERS(state, data) {
      state.users = [...data, ...state.users];
    },

    REMOVE_USER(state, id) {
      console.log(this.state);
      state.users = state.users.filter(item => item.id !== id);
    }
  },

  actions: {
    LOAD_USERS({ commit }) {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => commit("POPULATE_USERS", users));
    }
  }
};
