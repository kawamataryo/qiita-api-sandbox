type Post = {
  rendered_body: string;
  body: string;
  coediting: string;
  comments_count: number;
  created_at: string;
  group: string;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: { name: string; versions: string }[];
  title: string;
  updated_at: string;
  url: string;
  user: string;
  page_views_count: null | number;
};
