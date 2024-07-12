import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
    reactStrictMode: false,
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    // async headers() {
    //     return [
    //         {
    //             source: "/(.*)",
    //             headers: [
    //                 {
    //                     key: "Access-Control-Allow-Origin",
    //                     value: "http://localhost:62490",
    //                     // DOES NOT WORK
    //                     // value: process.env.ALLOWED_ORIGIN,
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Methods",
    //                     value: "GET, POST, PUT, DELETE, OPTIONS",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Headers",
    //                     value: "Content-Type, Authorization",
    //                 },
    //             ],
    //         },
    //     ];
    // },
});
