<template>
  <div class="home">
    <v-container>
      <v-card>
        <v-text-field v-model="userName"></v-text-field>
        <v-list>
          <v-list-item v-for="(post, i) in posts" :key="i">
            <v-list-item-avatar>{{ post.likes_count}}</v-list-item-avatar>
            {{ post.title }}
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  onBeforeMount,
  value,
  Wrapper
} from "vue-function-api";
import api from "@/lib/api.ts";

export default createComponent({
  setup() {
    const posts: Wrapper<Post[]> = value([]);
    const userName: Wrapper<string> = value("");
    onBeforeMount(async () => {
      const response = await api.getMyAuthPosts();
      posts.value = response.data;
    });
    return {
      posts,
      userName
    };
  }
});
</script>
