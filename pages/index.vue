<template>
  <div class="container">
      <main>
        <h2> Latest thoughts</h2>
        <u1>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div clas="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }} </nuxt-link>
              <p>{{ post.excerpt }} </p>
            </div>
         </li>
        </u1>
      </main>
  </div>
</template>

<script>
import { getPosts } from '~/api/post';

export default {
  async asyncData (){
    const posts = await getPosts();
    return {posts : posts}
  }
}
</script>

<style>

</style>
