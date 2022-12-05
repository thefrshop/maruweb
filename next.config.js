const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/web/:path*",
                destination: "http://localhost:4000/web/:path*", // Proxy to Backend
            },
            {
                source: "/web/images/:path*",
                destination: "http://localhost:4000/images/:path*", // Proxy to Backend
            },
            {
                source: "/images/:path*",
                destination: "http://localhost:4000/images/:path*", // Proxy to Backend
            },
            {
                source: "/files/:path*",
                destination: "http://localhost:4000/files/:path*", // Proxy to Backend
            },
        ];
    },
};

module.exports = nextConfig;
