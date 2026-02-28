"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { PostMeta } from "@/lib/types";

export function BlogFilters({ posts }: { posts: PostMeta[] }) {
  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState("all");

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );
  const tags = useMemo(
    () => ["all", ...Array.from(new Set(posts.flatMap((post) => post.tags)))],
    [posts]
  );

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = category === "all" || post.category === category;
      const tagMatch = tag === "all" || post.tags.includes(tag);
      return categoryMatch && tagMatch;
    });
  }, [posts, category, tag]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All categories" : item}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted-foreground">Tag</span>
          <select
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            {tags.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "All tags" : item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/resources/blog/${post.slug}`}
            category={post.category}
            date={new Date(post.date).toLocaleDateString("en-IN")}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}
