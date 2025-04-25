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
      <title>No-Phone Zone Ideas | Break Free From Phone Addiction</title>
      <meta name="description" content="Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life." />
      <meta property="og:title" content="No-Phone Zone Ideas | Break Free From Phone Addiction" />
      <meta property="og:description" content="Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life." />
      <meta property="og:url" content="https://nophonezone.xyz" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://nophonezone.xyz/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="No-Phone Zone Ideas | Break Free From Phone Addiction" />
      <meta name="twitter:description" content="Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life." />
      <meta name="twitter:image" content="https://nophonezone.xyz/og-image.jpg" />
      <link rel="canonical" href="https://nophonezone.xyz" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
