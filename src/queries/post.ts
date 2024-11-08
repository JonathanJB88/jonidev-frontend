export const postQuery = `
*[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
}
`;

export const postDetailQuery = `
*[_type == "post" && slug[$lang].current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->{name, "image": image.asset->url},
  "coverImage": coverImage.asset->url,
  "tags": tags[]->title,
 body
}`;

export const postBySlugQuery = `
*[_type == "post" && slug[$lang].current == $slug][0]{
  _id,
  slug,
}`;
