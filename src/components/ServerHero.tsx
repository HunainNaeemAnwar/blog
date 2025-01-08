import { client } from "../sanity/lib/client";

export async function getServerSideProps() {
  const heroData = await client.fetch(`*[_type == "heroSection"][0] {
    heading,
    subtext,
    "imageUrl": image.asset->url
  }`);

  const posts = await client.fetch(`*[_type == "post"] { slug }`);

  return {
    props: { heroData, posts },
  };
}
