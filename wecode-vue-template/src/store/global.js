const state = {
  userInfo: {}
};

const getters = {};
Object.keys(state).forEach(k => {
  getters[k] = s => s[k];
});

const mutations = {
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  getUserInfo: async ({ commit }) => {
    try {
      const response = await window.HWH5.userInfo().then(data => data);
      commit('SET_USER_INFO', response);
      return response;
    } catch (error) {
      console.log('error: ', error);
      return error;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
