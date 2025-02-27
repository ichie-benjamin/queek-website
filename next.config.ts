import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'queekapp-files.s3.us-east-1.amazonaws.com',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'queekapp-files.s3.us-east-1.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'app.queek.com.ng',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
