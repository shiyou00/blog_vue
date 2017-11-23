/* eslint-disable */
const INITIALIZE_DATA = 'INITIALIZE_DATA';
const CONTENT_DATA = 'CONTENT_DATA';
export default {
  [INITIALIZE_DATA](state,data) {
    state.articleList = data;
  },
  [CONTENT_DATA](state,data){
    state.content = data;
  }

}
