/* eslint-disable */
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
  [INITIALIZE_DATA](state,data) {
    state.articleList = data;
  }
}
