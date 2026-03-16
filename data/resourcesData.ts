export interface Resource {
  title: string
  href: string
}

export interface Download {
  title: string
  file?: string
}

export const resources: Resource[] = [
  {
    title: "Downloads",
    href: "/resources/downloads",
  },
  {
    title: "Newsletters",
    href: "/resources/newsletters",
  },
  {
    title: "Blogs",
    href: "/resources/blogs",
  },
  {
    title: "Media",
    href: "/resources/media",
  },
  {
    title: "Free Videos",
    href: "/resources/videos",
  },
]

export const downloads: Download[] = [
  {
    title: "POSH Act",
  },
  {
    title: "POSH Posters",
  },
  {
    title: "POSH Score Card",
  },
  {
    title: "Company E‑Brochure",
  },
  {
    title: "Mindset Vs Skillset Psychological Safety Assessment",
  },
]
