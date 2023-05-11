/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        serverName: 'CosmicMS',
        navMainLink: "/",
        navNewsLink: "/News/",
        navDownloadLink: "/Download/",
        navDiscordLink: "http://discord-link-goes-here/",
        navRegisterLink: "/Register/",
      },
}

module.exports = nextConfig
