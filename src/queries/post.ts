export const postQuery = `
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  } | order(date desc)
`;

/*
'author': author->{name, "image": image.asset->url},
  "coverImage": coverImage.asset->url,
  "tags": tags[]->title,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "link" => {
        "href": @.href
      }
    },
    _type == "image" => {
      ...,
      "url": asset->url
    }
  },
  */
