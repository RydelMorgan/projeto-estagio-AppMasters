/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        DEV_EMAIL_ADDRESS: process.env.DEV_EMAIL_ADDRESS
    }
}

module.exports = nextConfig