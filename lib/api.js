import client from './contentful';

export async function getSlides() {
  const entries = await client.getEntries({
    content_type: 'post',
  });

  return entries.items.map((item) => item.fields);
}
