import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    pengajuan: [],
    attendance: [],
    shift: [],
  },
  mutations: {
    GET_SUMMARYATTENDANCE(state, data) {
      const arr = data.message.totalPresentEmployees.data;
      const newArr = arr.map((obj) => {
        const newObj = { ...obj };
        const parse = JSON.parse(obj.clockIn);
        newObj.time = parse.time;
        newObj.address = parse.address;
        newObj.clockIn = parse;
        return newObj;
      });
      state.attendance = newArr;
    },
    GET_DATA(state, data) {
      state.data = data.message;
    },
    GET_PENGAJUAN(state, data) {
      const arr = data.message;
      const newArr = arr.map((obj) => {
        const newObj = { ...obj };
        const parse = JSON.parse(obj.location);
        newObj.address = parse.address;
        newObj.clockIn = parse;
        return newObj;
      });
      state.pengajuan = newArr;
    },
    GET_SHIFT(state, data) {
      state.shift = data.message;
    },
  },
  actions: {
    getApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API + proto.url}`, {
          headers: {
            Authorization: `Bearer ${proto.token}`,
          },
        })
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res.data);
            console.log(res);
            // console.log(JSON.parse(res.data.message.totalPresentEmployees.data[0].clockIn));
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    postApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data, {
          headers: {
            Authorization: `Bearer ${proto.token}`,
          },
        })
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
  },
  modules: {
  },
});
