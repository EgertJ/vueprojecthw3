<template>
    <div class="flex-container">
        <div v-for="item in posts">
            <div style ="display:flex; justify-content: space-between; align-items: center; padding-bottom:10px; width:100%">
                <img class="profilepic" :src="item.profilepic" />
                <h3>{{item.creation}}</h3>
            </div>
            <img class="jspic" :src="item.picture" />
                <h3 style="display:flex; justify-content: left; text-align: left; width:100%">{{item.caption}}</h3>
            <div style="display:flex; justify-content: space-between; align-items: center; width:100%">
                <button v-on:click="IncreaseLike(item.id)" class="like">
                    <img style="width:60%" :src="item.like" />
                </button>
                <h3>{{item.like_count + " likes"}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    name: 'Posts',
    data: function() {
        return{}
    },
    computed: {
        posts() {
            return this.$store.state.postsData
        }
    },
    methods:{
        IncreaseLike: function(item_id) {
            this.$store.commit('IncreaseLike', item_id)
        }
    }
}
</script>

<style scoped>

* {
    font-family: sans-serif;
}

#post-body {
    resize: none;
    vertical-align: top;
    margin: 0 auto;
    width: 70%;
}

.profilepic{
    width : 6%;
    height:fit-content;
}

.like{
    text-align: left;
    border: none;
    width : 10%;
    height:fit-content;
}
.flex-container {
    display: block;
    flex-wrap: nowrap;
}


.flex-container > div {
    background-color: #f1f1f1;
    width: 50%;
    margin:auto;
    margin-top: 2%;
    margin-bottom: 2%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    font-size: 15px;
    border-radius: 10px;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 1.5%;
}

.jspic{
    width : 100%;
}

</style>
