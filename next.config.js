const process = require('process');

const env = process.env.NODE_ENV;

module.exports = {
  async headers() {
    const headers = {
      'Content-Security-Policy': env.includes('dev')
        ? "object-src 'self'; default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' res.cloudinary.com; frame-ancestors 'self';"
        : "object-src 'self'; default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' res.cloudinary.com; frame-ancestors 'self';",
      'Strict-Transport-Security':
        'max-age=3124138248000; includeSubDomains; preload;',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'same-origin',
    };

    const nextHeaders = Object.entries(headers).map(([key, value]) => {
      return {
        key: key,
        value: value,
      };
    });

    return [
      {
        source: '/(.*)',
        headers: nextHeaders,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
