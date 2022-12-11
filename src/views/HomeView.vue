<template>
  <div class="home">
    <button @click="Logout" style="margin-top:3em" class="blue-button">Logout</button>
    <Posts/>
    <router-link to="/addPost">
      <button style="margin-top:3em" class="blue-button">Add post</button>
    </router-link>
    <button @click="deletePosts" style="margin-top:3em" class="blue-button">Delete all</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue';

export default {
  name: 'HomeView',
  posts: [],
  components: {
    Posts
 },
  methods: {
    fetchPosts() {
    fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },

    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      })
    },

    deletePosts() {
      for (let index = 0; index < this.posts.length; ++index) {
        const element = this.posts[index]
        fetch(`http://localhost:3000/api/posts/${element.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
        console.log(response.data);
        this.$router.go();
        })
        .catch((e) => {
        console.log(e);
        });
      }
    }
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
}
}

</script>

<style scoped>
.blue-button {
margin-left:1em;
margin-right:1em;
background-color: #4267B2;
border: 0;
padding: 10px 20px;
font-size: medium;
margin-top: 20px;
margin-bottom: 20px;
color: white;
border-radius: 20px;
}
</style>