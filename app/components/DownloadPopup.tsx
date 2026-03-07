"use client"

import { useState } from "react"

export default function DownloadModal({ file, close }: any) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  const handleSubmit = (e:any)=>{
    e.preventDefault()

    window.open(file.file,"_blank")

    close()
  }

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl w-[400px]">

        <h2 className="text-xl font-bold mb-4">
          Fill details to download
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            placeholder="Name"
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            placeholder="Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            placeholder="Phone"
            required
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="border p-2 rounded"
          />

          <button className="bg-black text-white py-2 rounded">
            Submit & Download
          </button>

        </form>

      </div>

    </div>

  )
}