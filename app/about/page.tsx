export const metadata = {
  title: "About Us - Version2",
  description: "Learn about Version2 - Leadership Development & Performance Excellence",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-8">About Version2</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>
          Version2 is a premier leadership development and organizational performance consulting firm dedicated to transforming businesses and empowering individuals through strategic training, coaching, and sustainable organizational change initiatives.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Our Mission</h2>
        <p>
          To empower organizations and leaders to achieve excellence through innovative learning solutions, strategic coaching, and sustainable behavioral change.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Excellence in delivery and impact</li>
          <li>Integrity and transparency</li>
          <li>Innovation and continuous improvement</li>
          <li>Sustainability and lasting change</li>
          <li>Client-centric approach</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Our Expertise</h2>
        <p>
          With years of experience in leadership development, compliance training, and organizational transformation, Version2 helps organizations build high-performing teams and create cultures of excellence.
        </p>
      </div>
    </div>
  );
}
