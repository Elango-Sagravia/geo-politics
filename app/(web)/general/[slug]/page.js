import { changeFormatDate } from "@/components/dateFormat";
import ComplainceHeader from "@/components/ui/complainceHeader/complainceHeader";
import ComplianceContentPrivacyPolicy from "@/components/ui/ComplianceContentPrivacyPolicy/ComplianceContentPrivacyPolicy";
import SinglePolicyPage from "@/components/ui/singlePolicyPage/singlePolicyPage";
import { notFound } from "next/navigation";
import {
  getDocumentBySlug,
  getDocuments,
  getDocumentSlugs,
} from "outstatic/server";
import { remark } from "remark";
import html from "remark-html";

async function getData(params) {
  const policy = getDocumentBySlug("pages", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "content",
  ]);
  if (!policy) {
    notFound();
  }
  const content = await markdownToHtml(policy.content || "");

  return {
    ...policy,
    content,
  };
}
export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
export async function generateStaticParams() {
  const pages = getDocumentSlugs("pages");
  return pages.map((slug) => ({ slug }));
}

export default async function Home({ params }) {
  const policy = await getData(params);
  console.log("policy in slug", policy);

  return (
    <main>
      <ComplainceHeader
        title={policy.title}
        date={changeFormatDate(policy.publishedAt)}
      />
      <div className="w-full md:w-4/5 lg:w-2/3 px-4 md:px-0 mx-auto  mt-8 max-w-7xl mb-32">
        <SinglePolicyPage policy={policy} />
      </div>
    </main>
  );
}
