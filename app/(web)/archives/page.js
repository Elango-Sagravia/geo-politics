import ArchiveHeader from "@/components/ui/archiveHeader/archiveHeader";
import GridContainer from "@/components/ui/gridContainer/gridContainer";
import Subscribe from "@/components/ui/subscribe/subscribe";
import blogs from "@/blogs";

import { getDocuments } from "outstatic/server";

const title = "Geopolitical Summary Archives - Past Editions";
const description =
  "Access past editions of Geopolitical Summary. Browse the archives for fact-checked insights on global politics and international affairs.";
export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/archives",
  },
  openGraph: {
    title,
    description,
  },
};

async function getData() {
  const blogs = getDocuments("blogs", [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
  ]);

  return blogs;
}

export default async function archive() {
  const blogs = await getData();
  return (
    <main className="">
      <ArchiveHeader />
      <section className="px-4 md:px-16 pt-4 pb-32 max-w-7xl mx-auto">
        <GridContainer hideButton={true} articles={blogs} />
      </section>
      <Subscribe />
    </main>
  );
}
