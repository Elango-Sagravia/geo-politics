import SingleBlog from "@/components/ui/singleBlog/singleBlog";
import { notFound, redirect } from "next/navigation";
import {
  getDocumentBySlug,
  getDocuments,
  getDocumentSlugs,
} from "outstatic/server";
import { Suspense } from "react";
import { remark } from "remark";
import html from "remark-html";

async function getData(params) {
  const post = getDocumentBySlug("blogs", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "readTime",
    "cutOff",
    "relatedArticles",
    "footerBannerTitle",
    "footerBannerContent",
    "emailHtml",
    "emailHtmlPreview",
  ]);
  if (!post) {
    // notFound();
    redirect("/archives");
  }
  console.log("post in slug", post);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  };
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
export async function generateStaticParams() {
  const posts = getDocumentSlugs("blogs");
  return posts.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch metadata for the slug
  const post = await getDocumentBySlug("blogs", params.slug, [
    "slug",
    "metaTitle",
    "metaDescription",
    "coverImage",
  ]);
  return {
    title: post?.metaTitle || "",
    description: post?.metaDescription || "",
    alternates: {
      canonical: `https://www.geopoliticalsummary.com/archives/${slug}`,
    },
    metadataBase: new URL(process.env.url),
    themeColor: "#06276f",
    openGraph: {
      title: post?.metaTitle || "",
      description: post?.metaDescription || "",
      url: process.env.url,
      images: [
        {
          url: post?.coverImage || "",
          secureUrl: post?.coverImage || "",
          alt: "Geopolitical Summary",
        },
      ],
      type: "article",
    },
  };
}
export default async function Home({ params }) {
  const blog = await getData(params);
  const blogs = await getDocuments("blogs", [
    "title",
    "slug",
    "coverImage",
    "readTime",
  ]);
  const index = blogs.findIndex((blog) => blog.slug === params.slug);
  const relatedBlogsSlugs = blog.relatedArticles.split(",");
  const relatedArticles = blogs.filter((el) =>
    relatedBlogsSlugs.includes(el.slug)
  );
  return (
    <div className="archive-page-slug">
      <Suspense>
        <SingleBlog
          index={index}
          blog={blog}
          relatedArticles={relatedArticles}
        />
      </Suspense>
    </div>
  );
}
