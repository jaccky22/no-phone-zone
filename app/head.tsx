export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://your-domain.com",
    name: "No-Phone Zone Ideas",
    description: "Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life.",
    publisher: {
      "@type": "Organization",
      name: "No-Phone Zone Ideas"
    }
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
