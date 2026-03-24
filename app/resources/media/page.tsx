export const metadata = {
  title: "Media & Press - Version2",
  description: "Media resources, press releases, and company information",
};

export default function MediaPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-4">Media & Press</h1>
      <p className="text-gray-600 mb-12">
        Latest news, press releases, and media resources from Version2.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
          <p className="text-gray-600">Check back soon for press releases and media coverage.</p>
        </div>
      </div>
    </div>
  );
}
