import { POSTS } from "./content";
import { Post } from "./types";

export function getAllPosts(): Post[] {
  return POSTS;
}

export function getPostBySlug(slug: string): Post | null {
  return POSTS.find((post) => post.slug === slug) ?? null;
}
