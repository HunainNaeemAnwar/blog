import { client } from "@/sanity/lib/client";
import About from "@/components/About";
export const revalidate = 30;
async function getData() {
  const Data = await client.fetch(`*[_type == "about"] {
    heading,
    aboutme,
    "imageUrl":image.asset->url
  }`);
  return Data;
}

const AboutPage = async () => {
  const data = await getData();
  return (
    <main>
      <About data={data[0]} />
    </main>
  );
};

export default AboutPage;
