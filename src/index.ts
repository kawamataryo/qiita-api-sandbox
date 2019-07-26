import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

const BASE_URL = "https://qiita.com/api/v2/";
const TOKEN = process.env.QIITA_TOKEN;

type Item = {
  rendered_body: string;
  body: string;
  coediting: string;
  comments_count: number;
  created_at: string;
  group: string;
  id: number;
  likes_count
  private: string;
  reactions_count: number;
  tags: string;
  title: string;
  updated_at: string;
  url: string;
  user: string;
  page_views_count: number;
}

const config: AxiosRequestConfig = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  }
};

const main = async () => {
  const getItems = async () => {
    const res = await axios.get(`${BASE_URL}/authenticated_user/items`, config);
    return res.data as Item[]
  };

  const items = await getItems();

  const publish_dates = items.map(item => {
    return item.created_at
  })

  console.log(publish_dates)
}

main()

