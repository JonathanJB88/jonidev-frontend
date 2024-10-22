export interface PostDetailResponse {
  publishedAt: Date;
  excerpt: Excerpt;
  tags: string[];
  _id: string;
  slug: Slug;
  coverImage: string;
  body: Body;
  title: Excerpt;
  author: Author;
}

export interface Author {
  name: string;
  image: string;
}

export interface Body {
  en: EnElement[];
  es: EnElement[];
  _type: string;
}

export interface EnElement {
  _type: EnType;
  style?: Style;
  _key: string;
  markDefs?: any[];
  children?: Child[];
  asset?: Asset;
}

export enum EnType {
  Block = 'block',
  Image = 'image',
}

export interface Asset {
  _type: string;
  _ref: string;
}

export interface Child {
  _type: ChildType;
  marks: string[];
  text: string;
  _key: string;
}

export enum ChildType {
  Span = 'span',
}

export enum Style {
  H1 = 'h1',
  H2 = 'h2',
  Normal = 'normal',
}

export interface Excerpt {
  _type: string;
  en: string;
  es: string;
}

export interface Slug {
  _type: string;
  en: EsClass;
  es: EsClass;
}

export interface EsClass {
  current: string;
  _type: string;
}

export interface PostDetail {
  id: string;
  title: string;
  slug: string;
  postDate: string;
  description: string;
  tags: string[];
  cover: string;
  author: Author;
  body: EnElement[];
}
