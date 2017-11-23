/* eslint-disable */
import axios from 'axios'
export default {
  //初始化信息
  initializeData({ commit }) {
    axios.get('/list.json')
      .then(function (response) {
        console.log(response);
        commit('INITIALIZE_DATA',response.data);
      })
      .catch(function (error) {
      });
  }
}
