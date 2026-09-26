export default function sitemap() {
  const base = "https://veronicadev.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
