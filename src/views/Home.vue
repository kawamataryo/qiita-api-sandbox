<template>
  <div class="home"></div>
</template>

<script lang="ts">
import {createComponent, onBeforeMount, value, Wrapper} from "vue-function-api";
import api from "@/lib/api.js";

export default createComponent({
  setup() {
    const posts: Wrapper<Post[]> = value([])
    onBeforeMount(async () => {
      const response = await api.getMyAuthPosts();
      posts.value = response.data;
    });
  }
});
</script>
