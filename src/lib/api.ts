import axios from "axios";

const client = axios.create({ baseURL: "https://qiita.com/api/v2" });
const userName = process.env.VUE_APP_QIITA_USER || "ryo2132";

export default {
  getPosts: async () => {
    return await client.get<Post[]>(
      `/users/${encodeURIComponent(userName)}/items?per_page=100`
    );
  }
};
