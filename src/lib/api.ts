import axios from "axios";

const TOKEN = process.env.VUE_APP_QIITA_TOKEN;

axios.defaults.baseURL = "https://qiita.com/api/v2";
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

export default {
  getMyAuthPosts: async () => {
    return await axios.get<Post[]>("/authenticated_user/items?per_page=100");
  }
};
