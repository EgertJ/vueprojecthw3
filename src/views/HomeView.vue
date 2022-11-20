<template>
  <div class="home">
    <Posts/>
    <button class="blue-button" v-on:click="ResetLikes">Reset likes</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue';

export default {
  name: 'HomeView',
  components: {
    Posts
 },
 methods: {
        ResetLikes: function() {
            this.$store.commit('ResetLikes')
        }
    }
}

</script>

<style scoped>
.blue-button {
  padding: 10px;
  font-size: medium;
  background-color: #4267B2;
  color: white;
  height: 3em;
  cursor:pointer;
  margin-bottom:10px;
}
</style>