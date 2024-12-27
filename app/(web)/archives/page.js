import ArchiveHeader from "@/components/ui/archiveHeader/archiveHeader";
import GridContainer from "@/components/ui/gridContainer/gridContainer";
import Subscribe from "@/components/ui/subscribe/subscribe";
import blogs from "@/blogs";

import { getDocuments } from "outstatic/server";



export const metadata = {
  title: "Geopolitics Archives - Explore Past Newsletters",
  description:
    "Browse the Geopolitics Summary archives to access past newsletters. Dive into reliable, fact-checked geopolitical insights anytime.",
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/archives",
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
