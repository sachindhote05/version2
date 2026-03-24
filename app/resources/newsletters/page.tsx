export const metadata = {
  title: "Newsletters - Version2",
  description: "Subscribe to Version2 newsletters for insights on leadership and organizational excellence",
};

export default function NewslettersPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-4">Newsletters</h1>
      <p className="text-gray-600 mb-12">
        Subscribe to our newsletters for regular insights on leadership development, organizational excellence, and workplace wellness.
      </p>
      <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">
          Get insights delivered to your inbox. No spam, just valuable content for leaders and organizations.
        </p>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
