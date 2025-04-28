module.exports = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    domains: ['otahvcdjxftgocdaowsn.supabase.co'],
  },
  output: 'export',
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
};