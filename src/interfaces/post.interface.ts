export interface PostResponse {
  _id: string;
  title: {
    _type: string;
    en: string;
    es: string;
  };
  slug: {
    _type: string;
    es: { current: string; _type: string };
    en: { current: string; _type: string };
  };
  publishedAt: string;
  excerpt: {
    _type: string;
    en: string;
    es: string;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  postDate: string;
  description: string;
}
