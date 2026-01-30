import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/asimar007/nocommit",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/package/nocommit",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
