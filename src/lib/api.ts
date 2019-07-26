import axios from "axios";
const TOKEN = process.env.QIITA_TOKEN;

axios.defaults.baseURL = "https://qiita.com/api/v2/docs";
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

export default {
  getMyAuthPosts: async () => {
    return await axios.get<Item[]>("/authenticated_user/items");
  }
};
