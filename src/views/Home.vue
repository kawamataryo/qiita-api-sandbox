<template>
  <div class="home">
    <v-container>
      <h1>hello</h1>
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
    onBeforeMount(async () => {
      const response = await api.getMyAuthPosts();
      posts.value = response.data;
    });
  }
});
</script>
