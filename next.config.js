/** @type {import('next').NextConfig} */

// workaround for 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
// https://github.com/nextauthjs/next-auth/issues/3580
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
