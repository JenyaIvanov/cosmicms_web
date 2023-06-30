/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Website Config
        serverName: 'CosmicMS',
        navVoteLink: "http://vote-link-goes-here/", // Vote Link
        footerDiscordLink: "http://discord-link-goes-here/", // Discord Link


        // Download
        // Please configure download links in the Download page located at pages/Download.tsx


        // Navigation
        navRegisterLink: "/Register/",
        navMainLink: "/",
        navNewsLink: "/News/",
        navDownloadLink: "/Download/",


        // Admin Panel Config
        adminAccount: "admin",
        adminPassword: "test",

    
      },
}

module.exports = nextConfig
