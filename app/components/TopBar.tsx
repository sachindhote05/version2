"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <a href="mailto:info@version2.in" className="hover:underline">info@version2.in</a>
        <div className="flex items-center gap-6">
          <span>+91-70226-21235</span>
        </div>
      </div>
    </div>
  );
}