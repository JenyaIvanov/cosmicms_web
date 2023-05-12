/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Website Config
        serverName: 'CosmicMS',
        navMainLink: "/",
        navNewsLink: "/News/",
        navDownloadLink: "/Download/",
        navDiscordLink: "http://discord-link-goes-here/", // Discord Link
        navRegisterLink: "/Register/",


        // Admin Panel Config
        adminAccount: "admin",
        adminPassword: "test",
      },
}

module.exports = nextConfig
