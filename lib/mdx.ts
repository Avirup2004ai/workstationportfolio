import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CaseStudyMeta, PostMeta } from "@/lib/types";

type Collection = "blog" | "case-studies" | "guides";

const contentRoot = path.join(process.cwd(), "content");

function readCollectionDir(collection: Collection) {
  return path.join(contentRoot, collection);
}

function getFiles(collection: Collection) {
  const dir = readCollectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function extractHeadings(source: string) {
  const headings = source
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { id, text };
    });

  return headings;
}

export function getBlogPosts() {
  const files = getFiles("blog");
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(readCollectionDir("blog"), file), "utf8");
    const { data } = matter(raw);
    return { ...(data as Omit<PostMeta, "slug">), slug } as PostMeta;
  });
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(readCollectionDir("blog"), `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { ...(data as Omit<PostMeta, "slug">), slug } as PostMeta,
    content,
    toc: extractHeadings(content)
  };
}

export function getCaseStudies() {
  const files = getFiles("case-studies");
  const studies = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(
      path.join(readCollectionDir("case-studies"), file),
      "utf8"
    );
    const { data } = matter(raw);
    return { ...(data as Omit<CaseStudyMeta, "slug">), slug } as CaseStudyMeta;
  });
  return studies.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getCaseStudyBySlug(slug: string) {
  const fullPath = path.join(readCollectionDir("case-studies"), `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { ...(data as Omit<CaseStudyMeta, "slug">), slug } as CaseStudyMeta,
    content,
    toc: extractHeadings(content)
  };
}

export function getGuides() {
  const files = getFiles("guides");
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(readCollectionDir("guides"), file), "utf8");
    const { data, content } = matter(raw);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { ...(data as Record<string, any>), slug, content, toc: extractHeadings(content) };
  });
}

export function getGuideBySlug(slug: string) {
  const fullPath = path.join(readCollectionDir("guides"), `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { ...(data as Record<string, any>), slug, content, toc: extractHeadings(content) };
}
