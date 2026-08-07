/**
 * Utility function to retrieve clean excerpt for a blog post,
 * falling back to description if excerpt is not explicitly provided.
 */
export function getExcerpt(post: { data: { excerpt?: string; description?: string } }): string {
  return post.data.excerpt || post.data.description || '';
}
