export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <div className="relative h-[500px] flex items-center justify-center text-white">

        <img
          src="/contact-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center">
          
        
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name*"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="email"
            placeholder="Email Id*"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="text"
            placeholder="Phone No*"
            className="w-full border px-4 py-3 rounded"
          />

          <input
            type="text"
            placeholder="Company*"
            className="w-full border px-4 py-3 rounded"
          />

          <textarea
            placeholder="Message*"
            className="w-full border px-4 py-3 rounded h-32"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Send Message
          </button>

        </div>
      </div>

    </div>
  )
}