import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/hero/Hero";
import Latest from "@/components/ui/latest/latest";
import ArchiveHome from "@/components/ui/archiveHome/archiveHome";
import Subscribe from "@/components/ui/subscribe/subscribe";

export const metadata = {
  title: "Geopolitics Summary - Fact-Checked News for Diplomats",
  description:
    "Stay informed with fact-checked newsletters from Geopolitics Summary. Trusted by diplomats and readers Summarywide for accurate geopolitical insights.",
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/",
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
