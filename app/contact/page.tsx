export const metadata = {
  title: "Contact Us - Version2",
  description: "Get in touch with Version2 for leadership development and training solutions",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a href="mailto:info@version2.in" className="text-blue-600 hover:underline">
                info@version2.in
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <a href="tel:+917022621235" className="text-blue-600 hover:underline">
                +91-70226-21235
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-700">
                Version2 Consulting<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <p className="text-gray-700 mb-4">
            Have a question or want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600">
              We typically respond within 24-48 hours. For urgent matters, please call us directly at +91-70226-21235.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
