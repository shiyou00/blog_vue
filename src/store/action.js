/* eslint-disable */
import axios from 'axios'
const HOST = 'http://localhost:3000';
export default {
  //初始化信息
  initializeData({ commit }) {
    axios.get(HOST+'/article/list')
      .then(function (response) {
        commit('INITIALIZE_DATA',response.data.list);
      })
      .catch(function (error) {
      });
  },
  //根据id获取相应的文章内容
  contentData({commit},id){
    axios.get(HOST+'/article/targetArticle/'+id)
      .then(function(response){
        commit('CONTENT_DATA',response.data.list[0]);
      })
      .catch(function(){
      });
  }
}
