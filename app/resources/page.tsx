import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto py-24 px-6">

      <h1 className="text-4xl font-bold mb-10">Resources</h1>

      <ul className="space-y-4 text-lg">

        <li>
          <Link href="/resources/downloads" className="hover:underline">
            Downloads
          </Link>
        </li>

        <li>
          <Link href="/resources/newsletters" className="hover:underline">
            Newsletters
          </Link>
        </li>

        <li>
          <Link href="/resources/blogs" className="hover:underline">
            Blogs
          </Link>
        </li>

        <li>
          <Link href="/resources/media" className="hover:underline">
            Media
          </Link>
        </li>

        <li>
          <Link href="/resources/videos" className="hover:underline">
            Free Videos
          </Link>
        </li>

      </ul>

    </div>
  )
}