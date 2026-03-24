export const metadata = {
  title: "Free Videos - Version2",
  description: "Watch free training videos on leadership development and organizational excellence",
};

export default function VideosPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-4">Free Training Videos</h1>
      <p className="text-gray-600 mb-12">
        Access free educational content on leadership, team development, and workplace wellness.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-600">Check back soon for free training videos and educational content.</p>
        </div>
      </div>
    </div>
  );
}
