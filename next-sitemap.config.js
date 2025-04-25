module.exports = {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  },
  sitemapSize: 7000
};
