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

// get all btechfin
export async function getAllBtechfin() {
  const entries = await client.getEntries({
    content_type: "btechfin",
    order: "-fields.order", // 필요한 정렬 기준을 설정
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get all ironflag
export async function getAllIronflag() {
  const entries = await client.getEntries({
    content_type: "ironflag",
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

// get a btechfin by slug
export async function getBtechfinBySlug(title) {
  const entries = await client.getEntries({
    content_type: "btechfin",
    limit: 1,
    "fields.title[in]": title,
  });
  if(entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a ironflag by slug
export async function getIronflagBySlug(title) {
  const entries = await client.getEntries({
    content_type: "ironflag",
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

// get more 3 latest btechfin
export async function getMoreBtechfin(title){
  const entries = await client.getEntries({
    content_type: "btechfin",
    limit: 3,
    order: "-fields.order",
    "fields.title[nin]": title,
  });
  if(entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest ironflag
export async function getMoreIronflag(title){
  const entries = await client.getEntries({
    content_type: "ironflag",
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

// parse btechfin slug
function parseBtechfinSlug({ fields }) {
  return {
    slug: fields.title,
  };
}

// parse ironflag slug
function parseIronflagSlug({ fields }) {
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

// btechfin
function parseBtechfinSlugEntries(entries, cb = parseBtechfinSlug) {
  return entries?.items?.map(cb);
}

// ironflag
function parseIronflagSlugEntries(entries, cb = parseIronflagSlug) {
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

// get all slugs of btechfin
export async function getAllBtechfinWithSlug() {
  const entries = await client.getEntries({
    content_type: "btechfin",
    select: "fields.title",
  });
  return parseBtechfinSlugEntries(entries, (btechfin) => btechfin.fields);
}

// get all slugs of ironflag
export async function getAllIronflagWithSlug() {
  const entries = await client.getEntries({
    content_type: "ironflag",
    select: "fields.title",
  });
  return parseIronflagSlugEntries(entries, (ironflag) => ironflag.fields);
}
