interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _links?: {
    self: Array<{ href: string }>;
  };
}

async function getPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch("https://version2.in/wp-json/wp/v2/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 && <p className="text-gray-600">No blog posts found</p>}

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">
              {post.title.rendered}
            </h2>
            <div className="text-gray-700 mb-4">
              {post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200)}...
            </div>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read More
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
