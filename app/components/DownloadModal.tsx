"use client"

import { useState } from "react"

export default function DownloadModal({ file, close }: any) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  const handleSubmit = (e:any)=>{
    e.preventDefault()

    const form = document.createElement("form")
    form.method = "POST"
    form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdLVFBkc4bvD9mlySu9QMREmSYbYNQLXBYAW8vSHbhL3ufWOQ/formResponse"
    form.target = "hidden_iframe"

    const nameInput = document.createElement("input")
    nameInput.name = "entry.1019874693"
    nameInput.value = name

    const emailInput = document.createElement("input")
    emailInput.name = "entry.147058111"
    emailInput.value = email

    const phoneInput = document.createElement("input")
    phoneInput.name = "entry.1210752596"
    phoneInput.value = phone

    const fileInput = document.createElement("input")
    fileInput.name = "entry.275885358"
    fileInput.value = file?.title || ""

    form.appendChild(nameInput)
    form.appendChild(emailInput)
    form.appendChild(phoneInput)
    form.appendChild(fileInput)

    document.body.appendChild(form)
    form.submit()

    if(file?.file){
      window.open(file.file,"_blank")
    }

    close()
  }

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <iframe name="hidden_iframe" style={{display:"none"}}></iframe>

      <div className="bg-white p-6 rounded-lg w-[360px]">

        <h2 className="text-lg font-bold mb-4">
          Enter details to download
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="border p-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
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