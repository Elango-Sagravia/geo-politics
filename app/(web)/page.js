import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/hero/Hero";
import Latest from "@/components/ui/latest/latest";
import ArchiveHome from "@/components/ui/archiveHome/archiveHome";
import Subscribe from "@/components/ui/subscribe/subscribe";

const title = "Geopolitical Summary - Understand the WHY behind current events";
const description =
  "Get fact-checked news and analysis on global politics with Geopolitical Summary. Trusted by diplomats and readers worldwide.";
export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/",
  },
  openGraph: {
    title,
    description,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Latest />
      <ArchiveHome />
      <Subscribe />
    </main>
  );
}
