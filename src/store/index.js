import { createStore } from 'vuex'
import posts from '../components/json/posts.json'

export default createStore({
  state: {
    postsData : posts
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.postsData.find((post) => parseInt(post.id) === id)
    }
  },
  mutations: {
    IncreaseLike(state, item_id) {
      state.postsData.forEach(function(element) {
        if (parseInt(element.id) === parseInt(item_id)) {
          element.like_count = String(parseInt(element.like_count) + 1);
        }
      });
    }, 
    ResetLikes(state) {
      state.postsData.forEach(function(element) {
        element.like_count = "0";
    });
    }

  },
  actions: {
  },
  modules: {
  }
}
)
