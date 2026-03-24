export const metadata = {
  title: "Blogs - Version2",
  description: "Insights and articles on leadership development, organizational performance, and workplace wellness",
};

export default function BlogsPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-4">Blog Articles</h1>
      <p className="text-gray-600 mb-12">
        Discover insights and best practices on leadership, organizational development, and workplace excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-600">Check back soon for insightful articles on leadership and organizational development.</p>
        </div>
      </div>
    </div>
  );
} 
