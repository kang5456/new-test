// set client
const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// get all posts
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get all press
export async function getAllPress() {
  const entries = await client.getEntries({
    content_type: "press",
    order: "-fields.order", // 필요한 정렬 기준을 설정
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get all insight
export async function getAllInsight() {
  const entries = await client.getEntries({
    content_type: "insight",
    order: "-fields.order", // 필요한 정렬 기준을 설정
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a post by slug
export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a press by slug
export async function getPressBySlug(title) {
  const entries = await client.getEntries({
    content_type: "press",
    limit: 1,
    "fields.title[in]": title,
  });
  if(entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a insight by slug
export async function getInsightBySlug(title) {
  const entries = await client.getEntries({
    content_type: "insight",
    limit: 1,
    "fields.title[in]": title,
  });
  if(entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest posts
export async function getMorePosts(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 3,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest press
export async function getMorePress(title){
  const entries = await client.getEntries({
    content_type: "press",
    limit: 3,
    order: "-fields.order",
    "fields.title[nin]": title,
  });
  if(entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest insight
export async function getMoreInsight(title){
  const entries = await client.getEntries({
    content_type: "insight",
    limit: 3,
    order: "-fields.order",
    "fields.title[nin]": title,
  });
  if(entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// parse post slug
function parsePostSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

// parse press slug
function parsePressSlug({ fields }) {
  return {
    slug: fields.title,
  };
}

// parse insight slug
function parseInsightSlug({ fields }) {
  return {
    slug: fields.title,
  };
}

// post
function parsePostSlugEntries(entries, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// press
function parsePressSlugEntries(entries, cb = parsePressSlug) {
  return entries?.items?.map(cb);
}

// insight
function parseInsightSlugEntries(entries, cb = parseInsightSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}

// get all slugs of press
export async function getAllPressWithSlug() {
  const entries = await client.getEntries({
    content_type: "press",
    select: "fields.title",
  });
  return parsePressSlugEntries(entries, (press) => press.fields);
}

// get all slugs of insight
export async function getAllInsightWithSlug() {
  const entries = await client.getEntries({
    content_type: "insight",
    select: "fields.title",
  });
  return parseInsightSlugEntries(entries, (insight) => insight.fields);
}
