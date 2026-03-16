"use client"

import { useState } from "react"
import { downloads, type Download } from "@/data/resourcesData"
import DownloadModal from "../../components/DownloadModal"

export default function DownloadsPage() {

  const [file, setFile] = useState<Download | null>(null)

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">

      <h1 className="text-3xl font-bold mb-8">Downloads</h1>

      <ul className="space-y-4">

        {downloads.map((item)=>(
          <li
            key={item.title}
            className="cursor-pointer hover:underline"
            onClick={()=>setFile(item)}
          >
            {item.title}
          </li>
        ))}

      </ul>

      {file && (
        <DownloadModal file={file} close={()=>setFile(null)} />
      )}

    </div>
  )
}
