async function getPosts() {
  const res = await fetch("https://version2.in/wp-json/wp/v2/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Posts fetch nahi ho paayi");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Blog Page</h1>

      {posts.length === 0 && <p>Koi blog nahi mila</p>}

      {posts.map((post: any) => (
        <div key={post.id} style={{ marginBottom: "30px" }}>
          <h2
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}